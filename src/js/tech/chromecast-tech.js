import videojs from 'video.js';

let Component = videojs.getComponent('Component');
let ControlBar = videojs.getComponent('ControlBar');
let Button = videojs.getComponent('Button');
let Tech = videojs.getComponent('Tech');

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

/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} params Object of option names and values
 * @param {Function=} options Options callback function
 * @extends Tech
 * @class Chromecast
 */
class ChromecastTech extends Tech {
  constructor(options, ready = {}) {
    super(options, ready);

    this.castBtn = this.options_.source.cast_;
    this.apiSession = this.options_.source.apiSession;
    this.receiver = this.apiSession.getCastDevice().friendlyName;

    this.castBtn.currentTech = this;

    this.initializeUI();
    this.initializeTracks();
    this.update();

    this.triggerReady();
  }

  initializeUI() {
      this.on('dispose', () => {
        console.log("dispose triggered");
        this.onMediaStatusUpdate();
        this.onSessionUpdate(false);
      });
  }

  initializeTracks() {
      let tracks = this.textTracks();
      if (tracks) {
          const changeHandler = this.handleTextTracksChange.bind(this);

          tracks.addEventListener('change', changeHandler);
          this.on('dispose', function() {
              tracks.removeEventListener('change', changeHandler);
          });

          this.handleTextTracksChange();
      }

      try {
          tracks = this.audioTracks();
          if (tracks) {
              const changeHandler = this.handleAudioTracksChange.bind(this);

              tracks.addEventListener('change', changeHandler);
              this.on('dispose', function() {
                  tracks.removeEventListener('change', changeHandler);
              });

          }
      } catch (e) {
          videojs.log('get player audioTracks fail' + e);
      }

      try {
          tracks = this.videoTracks();
          if (tracks) {
              const changeHandler = this.handleVideoTracksChange.bind(this);

              tracks.addEventListener('change', changeHandler);
              this.on('dispose', function() {
                  tracks.removeEventListener('change', changeHandler);
              });
          }
      } catch (e) {
          videojs.log('get player videoTracks fail' + e);
      }
  }

  createEl() {
    const el = videojs.dom.createEl('div', {
      id: this.options_.techId,
      className: 'vjs-tech vjs-tech-chromecast'
    });
    return el;
  }

  update() {
    this.el_.innerHTML = `<div class="casting-image" style="background-image: url('${this.options_.poster}')"></div><div class="casting-overlay"><div class="casting-information"><div class="casting-icon"></div><div class="casting-description"><small>${this.localize('CASTING TO')}</small><br>${this.receiver}</div></div></div>`;
  }

  onSessionUpdate(isAlive) {
    if (!this.apiSession) {
      return;
    }
    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  }

  onStopAppSuccess() {
    this.stopTrackingCurrentTime();
    this.apiSession = null;
  }

  onMediaStatusUpdate() {
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
  }

  src(src) {}

  currentSrc() {
    if (!this.apiSession) {
      return;
    }
    return this.castBtn.sources.src;
  }

  handleAudioTracksChange() {
    const trackInfo = [];
    const tTracks = this.textTracks();
    const tracks = this.audioTracks();

    if (!tracks) {
      return;
    }

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (track.enabled) {
        trackInfo.push((i + 1) + tTracks.length);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log('tracks are changing in remote');
    }
  }

  handleVideoTracksChange() {
  }

  handleTextTracksChange() {
    const trackInfo = [];
    const tracks = this.textTracks();

    if (!tracks) {
      return;
    }

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];

      if (track.mode === 'showing') {
        trackInfo.push(i + 1);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log("tracks are requested in remote");
    }
  }

  onTrackSuccess() {
    return videojs.log('track added');
  }

  onTrackError(e) {
    return videojs.log('Cast track Error: ' + JSON.stringify(e));
  }

  castError(e) {
    return videojs.log('Cast Error: ' + JSON.stringify(e));
  }

  controls() {
      return false;
  }

  play() {
    if (!this.apiSession) {
      return;
    }
    if (this.paused_) {
      this.castBtn.playerHandler.play();
    }

    return this.paused_ = false;
  }

  pause() {
    if (!this.apiSession) {
      return;
    }

    if (!this.paused_) {
        this.castBtn.playerHandler.pause();
    }

    return this.paused_ = true;
  }

  paused() {
    return this.paused_;
  }

  ended() {
    return chrome.cast.media.IdleReason === "FINISHED";
  }

  currentTime () {
      if (!this.apiSession) {
          return 0;
      }
      return this.castBtn.remotePlayer.currentTime;
  }

  setCurrentTime(position) {
    let time = 0;
    if (!this.apiSession) {
      return time;
    }

    time = position;

    this.castBtn.remotePlayer.currentTime = time;
    this.castBtn.remotePlayerController.seek();
    return time
  }

  volume() {
    return this.volume_;
  }

  buffered() {

  }

  duration() {
    if (!this.apiSession) {
      return 0;
    }
    return this.castBtn.player_.duration();
  }

  seeked() {
    console.log("has seekd");
  }

    seeking() {
    console.log('is seeking');
        return true;
    }

    seekable() {
        console.log('is seekable');
        return true;
    }

  setVolume(level, mute = false) {
    let request;
    let volume;

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
  }

  muted() {
    return this.muted_;
  }

  setMuted(muted) {
    return this.setVolume(this.volume_, muted);
  }

  supportsFullScreen() {
    return false;
  }

    resetSrc_ (callback) {
        callback();
    }

    dispose () {
        //this.resetSrc_(Function.prototype);
        super.dispose(this);
    }

    playbackRate() {
        return 1;
    }
}

ChromecastTech.prototype.paused_ = false;
ChromecastTech.prototype.options_ = {};
ChromecastTech.isSupported = function () {
    return true;
};
Tech.withSourceHandlers(ChromecastTech);
ChromecastTech.nativeSourceHandler = {};
ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
    const dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i;
    const dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i;

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

videojs.options.chromecast = {};

// Register the compnent with video.js, avoid double registration
if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
  Tech.registerTech('ChromecastTech', ChromecastTech);
}

export default ChromecastTech;
