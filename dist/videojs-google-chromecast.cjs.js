/*! @name videojs-google-chromecast @version 0.0.6 @license UNLICENSED */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var videojs = _interopDefault(require('video.js'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var ChromecastAPI = _interopDefault(require('chromecast-api'));

var version = "0.0.6";

var Component = videojs.getComponent('Component');
var ControlBar = videojs.getComponent('ControlBar');
var Button = videojs.getComponent('Button');
var Tech = videojs.getComponent('Tech');
var PLAYER_STATE = {
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
/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} params Object of option names and values
 * @param {Function=} options Options callback function
 * @extends Tech
 * @class Chromecast
 */

var ChromecastTech = /*#__PURE__*/function (_Tech) {
  _inheritsLoose(ChromecastTech, _Tech);

  function ChromecastTech(options, ready) {
    var _this;

    if (ready === void 0) {
      ready = {};
    }

    _this = _Tech.call(this, options, ready) || this;
    _this.castBtn = _this.options_.source.cast_;
    _this.apiSession = _this.options_.source.apiSession;
    _this.receiver = _this.apiSession.getCastDevice().friendlyName;
    _this.castBtn.currentTech = _assertThisInitialized(_this);

    _this.initializeUI();

    _this.initializeTracks();

    _this.update();

    _this.triggerReady();

    return _this;
  }

  var _proto = ChromecastTech.prototype;

  _proto.initializeUI = function initializeUI() {
    var _this2 = this;

    this.on('dispose', function () {
      console.log("dispose triggered");

      _this2.onMediaStatusUpdate();

      _this2.onSessionUpdate(false);
    });
  };

  _proto.initializeTracks = function initializeTracks() {
    var tracks = this.textTracks();

    if (tracks) {
      var changeHandler = this.handleTextTracksChange.bind(this);
      tracks.addEventListener('change', changeHandler);
      this.on('dispose', function () {
        tracks.removeEventListener('change', changeHandler);
      });
      this.handleTextTracksChange();
    }

    try {
      tracks = this.audioTracks();

      if (tracks) {
        var _changeHandler = this.handleAudioTracksChange.bind(this);

        tracks.addEventListener('change', _changeHandler);
        this.on('dispose', function () {
          tracks.removeEventListener('change', _changeHandler);
        });
      }
    } catch (e) {
      videojs.log('get player audioTracks fail' + e);
    }

    try {
      tracks = this.videoTracks();

      if (tracks) {
        var _changeHandler2 = this.handleVideoTracksChange.bind(this);

        tracks.addEventListener('change', _changeHandler2);
        this.on('dispose', function () {
          tracks.removeEventListener('change', _changeHandler2);
        });
      }
    } catch (e) {
      videojs.log('get player videoTracks fail' + e);
    }
  };

  _proto.createEl = function createEl() {
    var el = videojs.dom.createEl('div', {
      id: this.options_.techId,
      className: 'vjs-tech vjs-tech-chromecast'
    });
    return el;
  };

  _proto.update = function update() {
    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
  };

  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
    if (!this.apiSession) {
      return;
    }

    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  };

  _proto.onStopAppSuccess = function onStopAppSuccess() {
    this.stopTrackingCurrentTime();
    this.apiSession = null;
  };

  _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
    if (!this.apiSession) {
      return;
    }

    switch (this.castBtn.playerState) {
      case PLAYER_STATE.BUFFERING:
        this.trigger('waiting');
        break;

      case PLAYER_STATE.IDLE:
        this.trigger('timeupdate');
        this.trigger('ended');
        break;

      case PLAYER_STATE.PAUSED:
        this.trigger('pause');
        this.paused_ = true;
        break;

      case PLAYER_STATE.PLAYING:
        this.trigger('playing');
        this.trigger('play');
        this.paused_ = false;
        break;
    }
  };

  _proto.src = function src(_src) {};

  _proto.currentSrc = function currentSrc() {
    if (!this.apiSession) {
      return;
    }

    return this.castBtn.sources.src;
  };

  _proto.handleAudioTracksChange = function handleAudioTracksChange() {
    var trackInfo = [];
    var tTracks = this.textTracks();
    var tracks = this.audioTracks();

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.enabled) {
        trackInfo.push(i + 1 + tTracks.length);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log('tracks are changing in remote');
    }
  };

  _proto.handleVideoTracksChange = function handleVideoTracksChange() {};

  _proto.handleTextTracksChange = function handleTextTracksChange() {
    var trackInfo = [];
    var tracks = this.textTracks();

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.mode === 'showing') {
        trackInfo.push(i + 1);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log("tracks are requested in remote");
    }
  };

  _proto.onTrackSuccess = function onTrackSuccess() {
    return videojs.log('track added');
  };

  _proto.onTrackError = function onTrackError(e) {
    return videojs.log('Cast track Error: ' + JSON.stringify(e));
  };

  _proto.castError = function castError(e) {
    return videojs.log('Cast Error: ' + JSON.stringify(e));
  };

  _proto.controls = function controls() {
    return false;
  };

  _proto.play = function play() {
    if (!this.apiSession) {
      return;
    }

    if (this.paused_) {
      this.castBtn.playerHandler.play();
    }

    return this.paused_ = false;
  };

  _proto.pause = function pause() {
    if (!this.apiSession) {
      return;
    }

    if (!this.paused_) {
      this.castBtn.playerHandler.pause();
    }

    return this.paused_ = true;
  };

  _proto.paused = function paused() {
    return this.paused_;
  };

  _proto.ended = function ended() {
    return chrome.cast.media.IdleReason === "FINISHED";
  };

  _proto.currentTime = function currentTime() {
    if (!this.apiSession) {
      return 0;
    }

    return this.castBtn.remotePlayer.currentTime;
  };

  _proto.setCurrentTime = function setCurrentTime(position) {
    var time = 0;

    if (!this.apiSession) {
      return time;
    }

    time = position;
    this.castBtn.remotePlayer.currentTime = time;
    this.castBtn.remotePlayerController.seek();
    return time;
  };

  _proto.volume = function volume() {
    return this.volume_;
  };

  _proto.buffered = function buffered() {};

  _proto.duration = function duration() {
    if (!this.apiSession) {
      return 0;
    }

    return this.castBtn.player_.duration();
  };

  _proto.seeked = function seeked() {
    console.log("has seekd");
  };

  _proto.seeking = function seeking() {
    console.log('is seeking');
    return true;
  };

  _proto.seekable = function seekable() {
    console.log('is seekable');
    return true;
  };

  _proto.setVolume = function setVolume(level, mute) {
    if (mute === void 0) {
      mute = false;
    }

    var request;
    var volume;

    if (!this.apiSession) {
      return;
    }

    volume = new chrome.cast.Volume();
    volume.level = level;
    volume.muted = mute;
    this.volume_ = volume.level;
    this.muted_ = mute;
    request = new chrome.cast.media.VolumeRequest();
    request.volume = volume;
    return this.trigger('volumechange');
  };

  _proto.muted = function muted() {
    return this.muted_;
  };

  _proto.setMuted = function setMuted(muted) {
    return this.setVolume(this.volume_, muted);
  };

  _proto.supportsFullScreen = function supportsFullScreen() {
    return false;
  };

  _proto.resetSrc_ = function resetSrc_(callback) {
    callback();
  };

  _proto.dispose = function dispose() {
    //this.resetSrc_(Function.prototype);
    _Tech.prototype.dispose.call(this, this);
  };

  _proto.playbackRate = function playbackRate() {
    return 1;
  };

  return ChromecastTech;
}(Tech);

ChromecastTech.prototype.paused_ = false;
ChromecastTech.prototype.options_ = {};

ChromecastTech.isSupported = function () {
  return true;
};

Tech.withSourceHandlers(ChromecastTech);
ChromecastTech.nativeSourceHandler = {};

ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
  var dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i;
  var dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i;

  if (dashTypeRE.test(source)) {
    return 'probably';
  } else if (dashExtRE.test(source)) {
    return 'maybe';
  } else {
    return '';
  }
};

ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
  if (source.type) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

ChromecastTech.nativeSourceHandler.dispose = function () {};

ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
ChromecastTech.prototype.featuresVolumeControl = true;
ChromecastTech.prototype.featuresPlaybackRate = true;
ChromecastTech.prototype.movingMediaElementInDOM = true;
ChromecastTech.prototype.featuresTimeupdateEvents = true;
ChromecastTech.prototype.featuresProgressEvents = true;
ChromecastTech.prototype.featuresNativeTextTracks = true;
ChromecastTech.prototype.featuresNativeAudioTracks = true;
ChromecastTech.prototype.featuresNativeVideoTracks = true;
videojs.options.chromecast = {}; // Register the compnent with video.js, avoid double registration

if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
  Tech.registerTech('ChromecastTech', ChromecastTech);
}

var Component$1 = videojs.getComponent('Component');
var ControlBar$1 = videojs.getComponent('ControlBar');
var Button$1 = videojs.getComponent('Button');
var Tech$1 = videojs.getComponent('Tech');
var DEFAULT_VOLUME = 0.5;
var FULL_VOLUME_HEIGHT = 100;
var PLAYER_STATE$1 = {
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

var ChromecastButton = /*#__PURE__*/function (_Button) {
  _inheritsLoose(ChromecastButton, _Button);

  function ChromecastButton(player, options) {
    var _this2;

    _this2 = _Button.call(this, player, options) || this;
    _this2.sources = {};
    _this2.player = player;
    _this2.options = options;
    _this2.casting = false;
    _this2.apiSession = null;
    _this2.tryingReconnect = 0;
    _this2.mDNS = false;
    _this2.receivers = null;

    if (_this2.options.mdns !== undefined && _this2.options.mdns) {
      _this2.mDNS = true;
      _this2.receivers = [];
    }

    _this2.hide();

    _this2.initPlayerHandler(_assertThisInitialized(_this2));

    _this2.playerState = PLAYER_STATE$1.IDLE;
    _this2.playerStateBeforeSwitch = null;
    _this2.remotePlayer = null;
    _this2.remotePlayerController = null;
    _this2.currentMediaTime = 0;
    _this2.mediaDuration = -1;
    _this2.incrementMediaTimeHandler = _this2.incrementMediaTime.bind(_assertThisInitialized(_this2));
    _this2.mediaInfo = null;

    _this2.setupLocalPlayer();

    _this2.addVideoThumbs();

    _this2.initializeUI(player);

    return _this2;
  }

  var _proto = ChromecastButton.prototype;

  _proto.initCastPlayer = function initCastPlayer() {
    var _this = this;

    var options = _this.options;

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

    if (this.options.mdns !== undefined && this.options.mdns) {
      var client = new ChromecastAPI();
      this.client = client;
      this.client.on('device', function (device) {
        if (device !== undefined) {
          _this.receivers.push(device);
        }
      });
      console.log(this.client);
    }

    this.remotePlayer = new cast.framework.RemotePlayer();
    this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function (e) {
      this.switchPlayer(e.value);
    }.bind(this));
    this.apiInitialized = true;
  };

  _proto.initPlayerHandler = function initPlayerHandler(_this) {
    if (_this === void 0) {
      _this = {};
    }

    this.playerHandler = {};
    this.playerHandler.target = {};

    this.playerHandler.setTarget = function (target) {
      _this.playerHandler.target = target;
    };

    this.playerHandler.play = function () {
      if (_this.playerState == PLAYER_STATE$1.IDLE || !_this.playerHandler.target.isMediaLoaded()) {
        _this.playerHandler.load();

        return;
      }

      _this.playerState = PLAYER_STATE$1.PLAYING;

      _this.playerHandler.target.play();
    };

    this.playerHandler.pause = function () {
      _this.playerState = PLAYER_STATE$1.PAUSED;

      _this.playerHandler.target.pause();
    };

    this.playerHandler.stop = function () {
      _this.playerState = PLAYER_STATE$1.IDLE;

      _this.playerHandler.target.stop();
    };

    this.playerHandler.load = function () {
      _this.playerState = PLAYER_STATE$1.BUFFERING;

      _this.playerHandler.target.load();
    };

    this.playerHandler.isMediaLoaded = function () {
      return _this.playerHandler.target.isMediaLoaded();
    };

    this.playerHandler.prepareToPlay = function () {
      _this.mediaDuration = _this.playerHandler.getMediaDuration();

      _this.playerHandler.updateDurationDisplay();

      _this.playerState = PLAYER_STATE$1.LOADED;

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
  };

  _proto.initializeUI = function initializeUI(player) {
    var _this3 = this;

    if (player.controlBar !== undefined) {
      var castComponent = document.createElement('google-cast-launcher');
      castComponent.setAttribute('class', 'vjs-chromecast-button');
      var jsControlBar = document.getElementsByClassName('vjs-control-bar');

      if (jsControlBar.length > 0) {
        jsControlBar[0].appendChild(castComponent);
      } // Avoids inconsistency in videojs


      player.controlBar.chromecastButton = this;
      player.controlBar.children_.push(this);
    } else {
      return;
    }

    this.on(player, 'seeked', function () {
      if (_this3.casting && _this3.apiSession) {
        _this3.seekMedia(_this3.player_.currentTime());
      }
    });
    this.on(player, 'play', function (el) {
      if (_this3.casting && _this3.apiSession) {
        _this3.playerHandler.play();
      }
    });
    this.on(player, 'pause', function (el) {
      if (_this3.casting && _this3.apiSession) {
        _this3.playerHandler.pause();
      }
    });
    this.on(player, 'volumechange', function (el) {
      if (_this3.casting && _this3.apiSession) {
        var volumeLevel = _this3.player_.volume();

        if (_this3.player_.muted()) {
          _this3.playerHandler.mute();

          volumeLevel = 0;
        } else {
          _this3.playerHandler.unMute();
        }

        _this3.playerHandler.setVolume(volumeLevel);
      }
    });
    this.on(player, 'loadedmetadata', function (el) {
      _this3.onMediaLoadedLocally(_this3);
    });
    this.on(player, 'dispose', function () {
      if (_this3.casting && _this3.apiSession) {
        _this3.disposed = true;

        _this3.stop();
      }
    });
  };

  _proto.hide = function hide() {
    _Button.prototype.hide.call(this);

    var castButton = document.getElementsByClassName('vjs-chromecast-button');

    if (castButton.length > 0) {
      castButton[0].style.display = 'none';
    }
  };

  _proto.show = function show() {
    _Button.prototype.show.call(this);

    var castButton = document.getElementsByClassName('vjs-chromecast-button');

    if (castButton.length > 0) {
      castButton[0].style.display = 'block';
    }
  };

  _proto.buildCSSClass = function buildCSSClass() {
    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
  };

  _proto.receiverListener = function receiverListener(availability) {
    if (this.disposed) return;

    if (availability === 'available') {
      return this.show();
    }
    return this.hide();
  };

  _proto.findSources = function findSources() {
    var source = null;

    if (this.player_ === null) {
      if (this.player.cache_ !== undefined) {
        if (this.player.cache_.source != undefined) {
          source = this.player.cache_.source;
        }
      }
    } else {
      source = this.player_.currentSource();
    }

    this.sources = source;
    return this.sources;
  };

  _proto.switchPlayer = function switchPlayer(value) {
    this.playerStateBeforeSwitch = this.playerState;

    if (value) {
      if (cast && cast.framework && this.remotePlayer.isConnected) {
        this.playerHandler.pause();
        this.setupRemotePlayer();
      } else {
        this.setupLocalPlayer();
      }
    } else {
      this.setupLocalPlayer();
    }
  }
  /**
   * Add event listeners for player changes which may occur outside sender app.
   */
  ;

  _proto.setupRemotePlayer = function setupRemotePlayer() {
    // Triggers when the media info or the player state changes
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, function (event) {
      var session = cast.framework.CastContext.getInstance().getCurrentSession();

      if (!session) {
        this.mediaInfo = null;
        this.playerHandler.updateDisplay();
        return;
      }

      var media = session.getMediaSession();

      if (!media) {
        this.mediaInfo = null;
        this.playerHandler.updateDisplay();
        return;
      }

      this.apiSession = session;
      this.mediaInfo = media.media;

      if (this.mediaInfo) {
        this.isLiveContent = this.mediaInfo.streamType == chrome.cast.media.StreamType.LIVE;
      }

      if (media.playerState == PLAYER_STATE$1.PLAYING && this.playerState !== PLAYER_STATE$1.PLAYING) {
        this.playerHandler.prepareToPlay();
      }

      this.playerHandler.updateDisplay();
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED, function (event) {//this.enableProgressBar(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, function () {
      if (this.remotePlayer.isPaused) {
        this.playerHandler.pause();
      } else if (this.playerState !== PLAYER_STATE$1.PLAYING) {
        this.playerHandler.play();
      }
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, function () {
      if (this.remotePlayer.isMuted) {
        this.playerHandler.mute();
      } else {
        this.playerHandler.unMute();
      }
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, function () {
      var newVolume = this.remotePlayer.volumeLevel;
      this.player_.setVolume(newVolume);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, function (event) {
      this.isPlayingBreak(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED, function (event) {
      this.onWhenSkippableChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED, function (event) {
      this.onCurrentBreakClipTimeChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED, function (event) {
      this.onBreakClipIdChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED, function (event) {
      videojs.log('LIVE_SEEKABLE_RANGE_CHANGED');
      this.liveSeekableRange = event.value;
    }.bind(this)); // This object will implement PlayerHandler callbacks with
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
    }.bind(this); // Load request for local -> remote


    playerTarget.load = function () {
      this.findSources();
      videojs.log('Loading...' + ' test');
      var mediaInfo = new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type);
      mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
      mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
      mediaInfo.metadata.title = 'test';
      mediaInfo.metadata.subtitle = 'subtest';
      var poster = this.player_.poster();

      if (poster) {
        image = new chrome.cast.Image(poster);
        mediaInfo.metadata.images = [{
          'url': image
        }];
      }

      var request = new chrome.cast.media.LoadRequest(mediaInfo);
      request.currentTime = this.currentMediaTime; // Do not immediately start playing if the player was previously PAUSED.

      if (!this.playerStateBeforeSwitch || this.playerStateBeforeSwitch == PLAYER_STATE$1.PAUSED) {
        request.autoplay = false;
      } else {
        request.autoplay = true;
      }

      cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(function () {
        this.casting = true;
        videojs.log('Remote media loaded');
      }.bind(this), function (errorCode) {
        this.playerState = PLAYER_STATE$1.IDLE;
        videojs.log('Remote media load error: ' + this.getErrorMessage(errorCode));
        this.playerHandler.updateDisplay();
      }.bind(this));
    }.bind(this);

    playerTarget.isMediaLoaded = function () {
      var session = cast.framework.CastContext.getInstance().getCurrentSession();
      if (!session) return false;
      var media = session.getMediaSession();
      if (!media) return false;

      if (media.playerState == PLAYER_STATE$1.IDLE) {
        return false;
      }

      this.apiSession = session; // No need to verify local mediaIndex content.

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
      var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

      if (castSession && castSession.getMediaSession() && castSession.getMediaSession().media) {
        var media = castSession.getMediaSession();
        var mediaInfo = media.media;
        var mediaTitle = '';
        var mediaEpisodeTitle = '';
        var mediaSubtitle = '';

        if (mediaInfo.metadata) {
          mediaTitle = mediaInfo.metadata.title;
          mediaEpisodeTitle = mediaInfo.metadata.episodeTitle;
          mediaTitle = mediaEpisodeTitle ? mediaTitle + ': ' + mediaEpisodeTitle : mediaTitle;
          mediaTitle = mediaTitle ? mediaTitle + ' ' : '';
          mediaSubtitle = mediaInfo.metadata.subtitle;
          mediaSubtitle = mediaSubtitle ? mediaSubtitle + ' ' : '';
        }
      } else {
        // playerstate view
        // switch to local player
        this.currentTech.dispose();
        this.casting = false;
        var time = this.player_.currentTime();
        this.removeClass('connected');
        this.player_.src(this.player_.options_['sources']);

        if (!this.player_.paused()) {
          this.player_.one('seeked', function () {
            return this.player_.play();
          });
        }

        this.player_.currentTime(time);
        this.player_.options_.inactivityTimeout = this.inactivityTimeout; //this.apiSession = null;
      }
    }.bind(this);

    playerTarget.updateCurrentTimeDisplay = function () {
      this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
    }.bind(this);

    playerTarget.updateDurationDisplay = function () {
      this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
    }.bind(this);

    playerTarget.setTimeString = function (time) {
      var currentTimeString = this.getMediaTimeString(time);
    }.bind(this);

    playerTarget.setVolume = function (volumePosition) {
      var currentVolume = this.remotePlayer.volumeLevel;

      if (volumePosition > 1) {
        currentVolume = 1;
      } else {
        currentVolume = volumePosition;
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

    this.playerHandler.setTarget(playerTarget); // Setup remote player properties on setup

    if (this.remotePlayer.isMuted) {
      this.playerHandler.mute();
    } // The remote player may have had a volume set from previous playback
    //var currentVolume = this.remotePlayer.volumeLevel;
    //this.player_.setVolume(currentVolume);
    // Show media_control


    this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
    this.player_.loadTech_('ChromecastTech', {
      cast_: this,
      apiSession: this.apiSession
    }); // If resuming a session, take the remote properties and continue the existing playback. Otherwise, load local content.

    if (this.apiSession == cast.framework.SessionState.SESSION_RESUMED) {
      videojs.log('Resuming session');
      this.playerHandler.prepareToPlay();
    } else {
      this.playerHandler.load();
    }
  };

  _proto.setupLocalPlayer = function setupLocalPlayer() {
    // This object will implement PlayerHandler callbacks with localPlayer
    var playerTarget = {};

    var _this = this;

    playerTarget.play = function () {
      videojs.log("local player play");
    };

    playerTarget.pause = function () {
      videojs.log("local player pause");
    };

    playerTarget.stop = function () {
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

    playerTarget.updateDisplay = function () {// Do we need to change something in front view ?
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
      var currentTimeString = this.getMediaTimeString(time);
    }.bind(this);

    playerTarget.setVolume = function (volumePosition) {
      if (_this.mDNS && _this.receivers.length > 0) ; else {
        if (this.player_ !== undefined) {
          return this.player_.volume(volumePosition);
        } else if (_this.player_ !== undefined) {
          return _this.player_.volume(volumePosition);
        }
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
    this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT); //this.enableProgressBar(true);

    if (this.currentMediaTime > 0) {
      this.playerHandler.load();
      this.playerHandler.play();
    }
  };

  _proto.onMediaLoadedLocally = function onMediaLoadedLocally() {
    this.player_.currentTime(this.currentMediaTime);
    this.playerHandler.prepareToPlay();
  };

  _proto.addVideoThumbs = function addVideoThumbs() {
    /* Prepare thumbnails if we want to set them */
    // const poster = this.player_.poster();
  };

  _proto.seekMedia = function seekMedia(seekTime) {
    if (this.mediaDuration == null || cast.framework.CastContext.getInstance().getCurrentSession() && !this.remotePlayer.canSeek) {
      videojs.log('Error - Not seekable');
      return;
    }

    if (this.playerState === PLAYER_STATE$1.PLAYING || this.playerState === PLAYER_STATE$1.PAUSED) {
      this.currentMediaTime = seekTime;
    }

    this.playerHandler.seekTo(seekTime);
  };

  _proto.getErrorMessage = function getErrorMessage(error) {
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
  };

  _proto.endPlayback = function endPlayback() {
    this.currentMediaTime = 0;
    this.playerState = PLAYER_STATE$1.IDLE;
    this.this.updateDisplay();
  };

  _proto.getMediaTimeString = function getMediaTimeString(timestamp) {
    if (timestamp == undefined || timestamp == null) {
      return null;
    }

    var isNegative = false;

    if (timestamp < 0) {
      isNegative = true;
      timestamp *= -1;
    }

    var hours = Math.floor(timestamp / 3600);
    var minutes = Math.floor((timestamp - hours * 3600) / 60);
    var seconds = Math.floor(timestamp - hours * 3600 - minutes * 60);
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return (isNegative ? '-' : '') + hours + ':' + minutes + ':' + seconds;
  };

  _proto.incrementMediaTime = function incrementMediaTime() {
    // First sync with the current player's time
    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
    this.mediaDuration = this.playerHandler.getMediaDuration();
    this.playerHandler.updateDurationDisplay();

    if (this.mediaDuration == null || this.currentMediaTime < this.mediaDuration) {
      this.playerHandler.updateCurrentTimeDisplay();
    } else if (this.mediaDuration > 0) {
      this.endPlayback();
    }
  };

  return ChromecastButton;
}(Button$1);

ChromecastButton.prototype.tryingReconnect = 0;
ChromecastButton.prototype.inactivityTimeout = 2000;
ChromecastButton.prototype.controlText_ = 'Chromecast';
ControlBar$1.prototype.options_.children.splice(ControlBar$1.prototype.options_.children.length - 1, 0, 'chromeCastButton');

if (typeof Component$1.getComponent('ChromecastButton') === 'undefined') {
  Component$1.registerComponent('ChromecastButton', ChromecastButton);
}

var Component$2 = videojs.getComponent('Component');
var ControlBar$2 = videojs.getComponent('ControlBar');
var Button$2 = videojs.getComponent('Button');
var Tech$2 = videojs.getComponent('Tech');

var Chromecast = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Chromecast, _Component);

  function Chromecast(player, options) {
    var _this;

    _this = _Component.call(this, player, options) || this;
    var buttonChromecast = new ChromecastButton(player, options);

    window.__onGCastApiAvailable = function (isAvailable) {
      if (isAvailable) {
        buttonChromecast.initCastPlayer();
      }
    };

    return _this;
  }

  return Chromecast;
}(Component$2);

Chromecast.prototype.options_ = {};
videojs.options.children.push('chromecast');
videojs.addLanguage('en', {
  'CASTING TO': 'CASTING TO'
}); // Register the compnent with video.js, avoid double registration

if (typeof Component$2.getComponent('Chromecast') === 'undefined') {
  Component$2.registerComponent('Chromecast', Chromecast);
}

/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */

var chromecast = function chromecast(options) {
  var player = this;

  if (options === false || options && options.enabled === false) {
    return;
  }

  var allowedOptions = ["appId", "altSource", "onStop", "onError"];
  allowedOptions.forEach(function (opt) {
    if (player.options_.chromecast === undefined) {
      player.options_.chromecast = [];
    }

    if (player.options_.chromecast[opt] === undefined) {
      options[opt] = '';
    } else {
      options[opt] = player.options_.chromecast[opt];
    }
  });
  var googleCast = new Chromecast(player, options);
}; // Cross-compatibility for Video.js 5 and 6.


var registerPlugin = videojs.registerPlugin || videojs.plugin; // Register the plugin with video.js, avoid double registration

if (typeof videojs.getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast);
} // Include the version number.


chromecast.VERSION = version;

module.exports = chromecast;
