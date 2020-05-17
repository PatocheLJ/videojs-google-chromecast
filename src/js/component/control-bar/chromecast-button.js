import videojs from 'video.js';
import ChromecastTech from '../../tech/chromecast-tech';

let Component = videojs.getComponent('Component');
let ControlBar = videojs.getComponent('ControlBar');
let Button = videojs.getComponent('Button');
let Tech = videojs.getComponent('Tech');

const ENABLE_LIVE = false;
const DEFAULT_VOLUME = 0.5;
const FULL_VOLUME_HEIGHT = 100;
const TIMER_STEP = 1000;

const PLAYER_STATE = {
    // No media is loaded into the player.
    IDLE: 'IDLE',
    // Player is in PLAY mode but not actively playing content.
    BUFFERING: 'BUFFERING',
    // The media is loaded but not playing.
    LOADED: 'LOADED',
    // The media is playing.
    PLAYING: 'PLAYING',
    // The media is paused.
    PAUSED: 'PAUSED'
};

var hasReceiver = false;

class ChromecastButton extends Button {
  constructor(player, options) {
    super(player, options);

    this.sources = {};
    this.player = player;
    this.options = options;
    this.casting = false;
    this.apiSession = null;
    this.tryingReconnect = 0;

    this.hide();

    this.initPlayerHandler(this);
    this.playerState = PLAYER_STATE.IDLE;
    this.playerStateBeforeSwitch = null;

    this.remotePlayer = null;
    this.remotePlayerController = null;

    this.currentMediaTime = 0;
    this.mediaDuration = -1;

    this.incrementMediaTimeHandler = this.incrementMediaTime.bind(this);

    this.mediaInfo = null;

    this.setupLocalPlayer();
    this.addVideoThumbs();
    this.initializeUI(player);
  }

  initCastPlayer(){
    var options = this.options_.playerOptions.plugins.chromecast;
    if (options.appId !== undefined && options.appId !== '') {
        this.appId = options.appId;
    } else if (chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID) {
        this.appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
    }

    if (options.autoJoinPolicy !== undefined && options.autoJoinPolicy !== '') {
        this.autoJoinPolicy = options.autoJoinPolicy;
    } else if (chrome.cast.AutoJoinPolicy.PAGE_SCOPED) {
        this.autoJoinPolicy = chrome.cast.AutoJoinPolicy.PAGE_SCOPED;
    }

      cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: this.appId,
        autoJoinPolicy: this.autoJoinPolicy
      });

      this.remotePlayer = new cast.framework.RemotePlayer();
      this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
      this.remotePlayerController.addEventListener(
      cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,
          function (e) {
            this.switchPlayer(e.value);
          }.bind(this)
      );
      this.apiInitialized = true;
  }

  initPlayerHandler(_this = {}) {
    this.playerHandler = {};
    this.playerHandler.target = {};

    this.playerHandler.setTarget = function (target) {
        _this.playerHandler.target = target;
    };

    this.playerHandler.play = function () {
        if (_this.playerState == PLAYER_STATE.IDLE || !_this.playerHandler.target.isMediaLoaded()) {
            _this.playerHandler.load();
            return;
        }

        _this.playerState = PLAYER_STATE.PLAYING;
        _this.playerHandler.target.play();
    };

    this.playerHandler.pause = function () {
        _this.playerState = PLAYER_STATE.PAUSED;
        _this.playerHandler.target.pause();
    };

    this.playerHandler.stop = function () {
        _this.playerState = PLAYER_STATE.IDLE;
        _this.playerHandler.target.stop();
    };

    this.playerHandler.load = function () {
        _this.playerState = PLAYER_STATE.BUFFERING;
        _this.playerHandler.target.load();
    };

    this.playerHandler.isMediaLoaded = function () {
        return _this.playerHandler.target.isMediaLoaded();
    };

    this.playerHandler.prepareToPlay = function () {
        _this.mediaDuration = _this.playerHandler.getMediaDuration();
        _this.playerHandler.updateDurationDisplay();
        _this.playerState = PLAYER_STATE.LOADED;

        _this.playerHandler.play();
        _this.playerHandler.updateDisplay();
    };

    this.playerHandler.getCurrentMediaTime = function () {
        return _this.playerHandler.target.getCurrentMediaTime();
    };

    this.playerHandler.getMediaDuration = function () {
        return _this.playerHandler.target.getMediaDuration();
    };

    this.playerHandler.updateDisplay = function () {
        // Update local variables
        _this.playerHandler.currentMediaTime = _this.playerHandler.target.getCurrentMediaTime();
        _this.playerHandler.mediaDuration = _this.playerHandler.target.getMediaDuration();

        _this.playerHandler.target.updateDisplay();
    };

    this.playerHandler.updateCurrentTimeDisplay = function () {
        _this.playerHandler.target.updateCurrentTimeDisplay();
    };

    this.playerHandler.updateDurationDisplay = function () {
        _this.playerHandler.target.updateDurationDisplay();
    };

    this.playerHandler.setTimeString = function (time) {
        _this.playerHandler.target.setTimeString(time);
    };

    this.playerHandler.setVolume = function (volumeSliderPosition) {
        _this.playerHandler.target.setVolume(volumeSliderPosition);
    };

    this.playerHandler.mute = function () {
        _this.playerHandler.target.mute();
    };

    this.playerHandler.unMute = function () {
        _this.playerHandler.target.unMute();
    };

    this.playerHandler.isMuted = function () {
        return _this.playerHandler.target.isMuted();
    };

    this.playerHandler.seekTo = function (time) {
        _this.playerHandler.target.seekTo(time);
    };
  }

  initializeUI(player) {
    if (player.controlBar !== undefined) {
      var castComponent = document.createElement('google-cast-launcher');
      castComponent.setAttribute('class','vjs-chromecast-button');
      var jsControlBar = document.getElementsByClassName('vjs-control-bar');
      if (jsControlBar.length > 0) {
        jsControlBar[0].appendChild(castComponent);
      }
      // Avoids inconsistency in videojs
      player.controlBar.chromecastButton = this
      player.controlBar.children_.push(this);
    } else {
      return;
    }

    this.on(player, 'seeked', () => {
        if (this.casting && this.apiSession) {
            this.seekMedia(this.player_.currentTime());
        }
    });
    this.on(player, 'play', (el) => {
        if (this.casting && this.apiSession) {
            this.playerHandler.play()
        }
    });
    this.on(player, 'pause', (el) => {
        if (this.casting && this.apiSession) {
            this.playerHandler.pause();
        }
    });
    this.on(player, 'volumechange', (el) => {
        if (this.casting && this.apiSession) {
            var volumeLevel = this.player_.volume();
            if(this.player_.muted()) {
                this.playerHandler.mute();
                volumeLevel = 0;
            } else {
                this.playerHandler.unMute();
            }
            this.playerHandler.setVolume(volumeLevel);
        }
    });
    this.on(player, 'loadedmetadata', (el) => {
        this.onMediaLoadedLocally(this);
    });
    this.on(player, 'dispose', () => {
        if (this.casting && this.apiSession) {
            this.disposed = true;
            this.stop();
        }
    });
  }

  hide() {
    super.hide();
    var castButton = document.getElementsByClassName('vjs-chromecast-button');
    if (castButton.length > 0) {
      castButton[0].style.display = 'none';
    }
  }

  show() {
    super.show();
    var castButton = document.getElementsByClassName('vjs-chromecast-button');
    if (castButton.length > 0) {
        castButton[0].style.display = 'block';
    }
  }

  buildCSSClass() {
    return `vjs-chromecast-button ${super.buildCSSClass(this)}`;
  }

  receiverListener(availability) {
    if (this.disposed)
        return;

    if (availability === 'available') {
      hasReceiver = true;
      return this.show();
    }
    hasReceiver = false;
    return this.hide();
  }

  findSources() {
      var source = null;
      if (this.player_ === null) {
          if (this.player.cache_ !== undefined) {
              if (this.player.cache_.source != undefined) {
                  source = this.player.cache_.source
              }
          } else {
              // Maybe try to get the source from DOM
          }
      } else {
          source = this.player_.currentSource();
      }
      this.sources = source;
      return this.sources;
  }

  switchPlayer(value) {
    this.playerStateBeforeSwitch = this.playerState;

    if (value) {
      if (cast && cast.framework && this.remotePlayer.isConnected) {
          this.playerHandler.pause();
          this.setupRemotePlayer();
      } else {
          this.setupLocalPlayer();
      }
    } else {
        // casting has ended so the session needs to be renewed
        this.setupLocalPlayer();
    }
  }

  /**
   * Add event listeners for player changes which may occur outside sender app.
   */
  setupRemotePlayer() {
      // Triggers when the media info or the player state changes
      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED,
          function (event) {
              let session = cast.framework.CastContext.getInstance().getCurrentSession();
              if (!session) {
                  this.mediaInfo = null;
                  this.playerHandler.updateDisplay();
                  return;
              }

              let media = session.getMediaSession();
              if (!media) {
                  this.mediaInfo = null;
                  this.playerHandler.updateDisplay();
                  return;
              }

              this.apiSession = session;

              this.mediaInfo = media.media;

              if (this.mediaInfo) {
                  this.isLiveContent = (this.mediaInfo.streamType == chrome.cast.media.StreamType.LIVE);
              }

              if (media.playerState == PLAYER_STATE.PLAYING && this.playerState !== PLAYER_STATE.PLAYING) {
                  this.playerHandler.prepareToPlay();
              }

              this.playerHandler.updateDisplay();
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED,
          function (event) {
              //this.enableProgressBar(event.value);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED,
          function () {
              if (this.remotePlayer.isPaused) {
                  this.playerHandler.pause();
              } else if (this.playerState !== PLAYER_STATE.PLAYING) {
                  this.playerHandler.play();
              }
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED,
          function () {
              if (this.remotePlayer.isMuted) {
                  this.playerHandler.mute();
              } else {
                  this.playerHandler.unMute();
              }
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED,
          function () {
              var newVolume = this.remotePlayer.volumeLevel;
              this.player_.setVolume(newVolume);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED,
          function (event) {
              this.isPlayingBreak(event.value);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED,
          function (event) {
              this.onWhenSkippableChanged(event.value);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED,
          function (event) {
              this.onCurrentBreakClipTimeChanged(event.value);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED,
          function (event) {
              this.onBreakClipIdChanged(event.value);
          }.bind(this)
      );

      this.remotePlayerController.addEventListener(
          cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED,
          function (event) {
              videojs.log('LIVE_SEEKABLE_RANGE_CHANGED');
              this.liveSeekableRange = event.value;
          }.bind(this)
      );

      // This object will implement PlayerHandler callbacks with
      // remotePlayerController, and makes necessary UI updates specific
      // to remote playback.
      var playerTarget = {};

      playerTarget.play = function () {
          if (this.remotePlayer.isPaused) {
              this.remotePlayerController.playOrPause();
              this.player_.play();
          }
      }.bind(this);

      playerTarget.pause = function () {
          if (!this.remotePlayer.isPaused) {
              this.remotePlayerController.playOrPause();
              this.player_.pause();
          }
      }.bind(this);

      playerTarget.stop = function () {
          this.remotePlayerController.stop();
      }.bind(this);

      // Load request for local -> remote
      playerTarget.load = function () {
          this.findSources();

          videojs.log('Loading...' + ' test');

          let mediaInfo = new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type);
          mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
          mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
          mediaInfo.metadata.title = 'test';
          mediaInfo.metadata.subtitle = 'subtest';

          const poster = this.player_.poster();
          if (poster) {
              image = new chrome.cast.Image(poster);
              mediaInfo.metadata.images = [{
                  'url': image
              }];
          }

          let request = new chrome.cast.media.LoadRequest(mediaInfo);
          request.currentTime = this.currentMediaTime;

          // Do not immediately start playing if the player was previously PAUSED.
          if (!this.playerStateBeforeSwitch || this.playerStateBeforeSwitch == PLAYER_STATE.PAUSED) {
              request.autoplay = false;
          } else {
              request.autoplay = true;
          }

          cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(
              function () {
                  this.casting = true;
                  videojs.log('Remote media loaded');
              }.bind(this),
              function (errorCode) {
                  this.playerState = PLAYER_STATE.IDLE;
                  videojs.log('Remote media load error: ' + this.getErrorMessage(errorCode));
                  this.playerHandler.updateDisplay();
              }.bind(this));
      }.bind(this);

      playerTarget.isMediaLoaded = function () {
          let session = cast.framework.CastContext.getInstance().getCurrentSession();
          if (!session) return false;

          let media = session.getMediaSession();
          if (!media) return false;

          if (media.playerState == PLAYER_STATE.IDLE) {
              return false;
          }

          this.apiSession = session;

          // No need to verify local mediaIndex content.
          return true;
      }.bind(this);

      /**
       * @return {number?} Current media time for the content. Always returns
       *      media time even if in clock time (conversion done when displaying).
       */
      playerTarget.getCurrentMediaTime = function () {
          return this.remotePlayer.currentTime;
      }.bind(this);

      /**
       * @return {number?} media time duration for the content. Always returns
       *      media time even if in clock time (conversion done when displaying).
       */
      playerTarget.getMediaDuration = function () {
          return this.remotePlayer.duration;
      }.bind(this);

      playerTarget.updateDisplay = function () {
          let castSession = cast.framework.CastContext.getInstance().getCurrentSession();
          if (castSession && castSession.getMediaSession() && castSession.getMediaSession().media) {
              let media = castSession.getMediaSession();
              let mediaInfo = media.media;

              let mediaTitle = '';
              let mediaEpisodeTitle = '';
              let mediaSubtitle = '';

              if (mediaInfo.metadata) {
                  mediaTitle = mediaInfo.metadata.title;
                  mediaEpisodeTitle = mediaInfo.metadata.episodeTitle;
                  mediaTitle = mediaEpisodeTitle ? mediaTitle + ': ' + mediaEpisodeTitle : mediaTitle;
                  mediaTitle = (mediaTitle) ? mediaTitle + ' ' : '';
                  mediaSubtitle = mediaInfo.metadata.subtitle;
                  mediaSubtitle = (mediaSubtitle) ? mediaSubtitle + ' ' : '';
              }

          } else {
              // playerstate view
              // switch to local player
              this.currentTech.dispose();

              this.casting = false;
              let time = this.player_.currentTime();
              this.removeClass('connected');
              this.player_.src(this.player_.options_['sources']);
              if (!this.player_.paused()) {
                  this.player_.one('seeked', function () {
                      return this.player_.play();
                  });
              }
              this.player_.currentTime(time);
              this.player_.options_.inactivityTimeout = this.inactivityTimeout;
              //this.apiSession = null;
          }
      }.bind(this);

      playerTarget.updateCurrentTimeDisplay = function () {
          this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
      }.bind(this);

      playerTarget.updateDurationDisplay = function () {
          this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
      }.bind(this);

      playerTarget.setTimeString = function (time) {
          let currentTimeString = this.getMediaTimeString(time);
          if (currentTimeString !== null) {
              //element.style.display = 'flex';
              //element.innerHTML = currentTimeString;
          } else {
              //element.style.display = 'none';
          }
      }.bind(this);

      playerTarget.setVolume = function (volumePosition) {
          var currentVolume = this.remotePlayer.volumeLevel;
          if (volumePosition > 1) {
              currentVolume = 1;
          } else {
              currentVolume = volumePosition
          }

          this.remotePlayer.volumeLevel = currentVolume;
          this.remotePlayerController.setVolumeLevel();
      }.bind(this);

      playerTarget.mute = function () {
          if (!this.remotePlayer.isMuted) {
              this.remotePlayerController.muteOrUnmute();
          }
      }.bind(this);

      playerTarget.unMute = function () {
          if (this.remotePlayer.isMuted) {
              this.remotePlayerController.muteOrUnmute();
          }
      }.bind(this);

      playerTarget.isMuted = function () {
          return this.remotePlayer.isMuted;
      }.bind(this);

      playerTarget.seekTo = function (time) {
          this.remotePlayer.currentTime = time;
          this.remotePlayerController.seek();
      }.bind(this);

      this.playerHandler.setTarget(playerTarget);

      // Setup remote player properties on setup
      if (this.remotePlayer.isMuted) {
          this.playerHandler.mute();
      }

      // The remote player may have had a volume set from previous playback
      //var currentVolume = this.remotePlayer.volumeLevel;
      //this.player_.setVolume(currentVolume);

      // Show media_control
      this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
      this.player_.loadTech_('ChromecastTech', {
            cast_: this,
            apiSession: this.apiSession,
          }
      );

      // If resuming a session, take the remote properties and continue the existing playback. Otherwise, load local content.
      if (this.apiSession == cast.framework.SessionState.SESSION_RESUMED) {
          videojs.log('Resuming session');
          this.playerHandler.prepareToPlay();
      } else {
          this.playerHandler.load();
      }
  }

  setupLocalPlayer() {
      // This object will implement PlayerHandler callbacks with localPlayer
      var playerTarget = {};
      var _this = this;

      playerTarget.play = function () {
          //this.play();
          videojs.log("local player play");
      };

      playerTarget.pause = function () {
          //this.pause();
          videojs.log("local player pause");
      };

      playerTarget.stop = function () {
          //this.stop();
          videojs.log("local player stop");
      };

      playerTarget.load = function () {
          videojs.log("local player load");
      }.bind(this);

      playerTarget.isMediaLoaded = function () {
          this.findSources();
          return this.sources.src;
      }.bind(this);

      playerTarget.getCurrentMediaTime = function () {
          if (this.player_ !== undefined) {
              return this.player_.currentTime();
          } else if (_this.player_ !== undefined) {
              return _this.player_.currentTime();
          }
      };

      playerTarget.getMediaDuration = function () {
          if (this.player_ !== undefined) {
              return this.player_.duration();
          } else if (_this.player_ !== undefined) {
              return _this.player_.duration();
          }
      };

      playerTarget.updateDisplay = function () {
          // Do we need to change something in front view ?
      };

      playerTarget.updateCurrentTimeDisplay = function () {
          // Increment for local playback
          this.currentMediaTime += 1;
          this.playerHandler.setTimeString(this.currentMediaTime);
      }.bind(this);

      playerTarget.updateDurationDisplay = function () {
          this.playerHandler.setTimeString(this.mediaDuration);
      }.bind(this);

      playerTarget.setTimeString = function (time) {
          let currentTimeString = this.getMediaTimeString(time);
          if (currentTimeString !== null) {
              //element.style.display = '';
              //element.innerHTML = currentTimeString;
          } else {
              //element.style.display = 'none';
          }
      }.bind(this);

      playerTarget.setVolume = function (volumePosition) {
          if (this.player_ !== undefined) {
              return this.player_.volume(volumePosition);
          } else if (_this.player_ !== undefined) {
              return _this.player_.volume(volumePosition);
          }
      };

      playerTarget.mute = function () {
          if (this.player_ !== undefined) {
              return this.player_.mute(true);
          } else if (_this.player_ !== undefined) {
              return _this.player_.mute(true);
          }
      };

      playerTarget.unMute = function () {
          if (this.player_ !== undefined) {
              return this.player_.mute(false);
          } else if (_this.player_ !== undefined) {
              return _this.player_.mute(false);
          }
      };

      playerTarget.isMuted = function () {
          if (this.player_ !== undefined) {
              return this.player_.mute();
          } else if (_this.player_ !== undefined) {
              return _this.player_.mute();
          }
      };

      playerTarget.seekTo = function (time) {
          if (this.player_ !== undefined) {
              return this.player_.currentTime(time);
          } else if (_this.player_ !== undefined) {
              return _this.player_.currentTime(time);
          }
      };

      this.playerHandler.setTarget(playerTarget);

      this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT);

      //this.enableProgressBar(true);

      if (this.currentMediaTime > 0) {
          this.playerHandler.load();
          this.playerHandler.play();
      }
  }

  onMediaLoadedLocally() {
    this.player_.currentTime(this.currentMediaTime);
    this.playerHandler.prepareToPlay();
  }

  addVideoThumbs() {
    /* Prepare thumbnails if we want to set them */
    // const poster = this.player_.poster();
  }

  seekMedia(seekTime) {
      if (this.mediaDuration == null || (cast.framework.CastContext.getInstance().getCurrentSession() && !this.remotePlayer.canSeek)) {
          videojs.log('Error - Not seekable');
          return;
      }

      if (this.playerState === PLAYER_STATE.PLAYING || this.playerState === PLAYER_STATE.PAUSED) {
          this.currentMediaTime = seekTime;
      }

      this.playerHandler.seekTo(seekTime);
  };

  getErrorMessage(error) {
    switch (error.code) {
      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
        return 'The API is not initialized.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.CANCEL:
        return 'The operation was canceled by the user' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.CHANNEL_ERROR:
        return 'A channel to the receiver is not available.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.EXTENSION_MISSING:
        return 'The Cast extension is not available.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.INVALID_PARAMETER:
        return 'The parameters to the operation were not valid.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
        return 'No receiver was compatible with the session request.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.SESSION_ERROR:
        return 'A session could not be created, or a session was invalid.' + (error.description ? ' :' + error.description : '');
      case chrome.cast.ErrorCode.TIMEOUT:
        return 'The operation timed out.' + (error.description ? ' :' + error.description : '');
      default:
        return error;
    }
  }

  endPlayback() {
    this.currentMediaTime = 0;
    this.playerState = PLAYER_STATE.IDLE;
    this.this.updateDisplay();
  }

  getMediaTimeString(timestamp) {
    if (timestamp == undefined || timestamp == null) {
        return null;
    }

    let isNegative = false;
    if (timestamp < 0) {
        isNegative = true;
        timestamp *= -1;
    }

    let hours = Math.floor(timestamp / 3600);
    let minutes = Math.floor((timestamp - (hours * 3600)) / 60);
    let seconds = Math.floor(timestamp - (hours * 3600) - (minutes * 60));

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return (isNegative ? '-' : '') + hours + ':' + minutes + ':' + seconds;
  }

  getClockTimeString(timestamp) {
      if (!timestamp) return "0:00:00";

      let date = new Date(timestamp * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      // Hour '0' should be '12'
      hours = hours ? hours : 12;
      minutes = ('0' + minutes).slice(-2);
      seconds = ('0' + seconds).slice(-2);
      let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      return clockTime;
  }

  incrementMediaTime() {
    // First sync with the current player's time
    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
    this.mediaDuration = this.playerHandler.getMediaDuration();

    this.playerHandler.updateDurationDisplay();

    if (this.mediaDuration == null || this.currentMediaTime < this.mediaDuration) {
        this.playerHandler.updateCurrentTimeDisplay();
    } else if (this.mediaDuration > 0) {
        this.endPlayback();
    }
  }

}

ChromecastButton.prototype.tryingReconnect = 0;
ChromecastButton.prototype.inactivityTimeout = 2000;
ChromecastButton.prototype.controlText_ = 'Chromecast';
ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 1, 0, 'chromeCastButton');

if (typeof Component.getComponent('ChromecastButton') === 'undefined') {
    Component.registerComponent('ChromecastButton', ChromecastButton);
}

export default ChromecastButton;
