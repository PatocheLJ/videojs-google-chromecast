/*! @name videojs-google-chromecast @version 0.0.1 @license UNLICENSED */
import videojs$1 from 'video.js';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose';

var version = "0.0.1";

/**
 * @file chromecast-button.js
 */
var registerComponent = videojs.registerComponent || videojs.component;
var getComponent = videojs.getComponent;
var ControlBar = getComponent('ControlBar');
var Component = getComponent('Component');
var Button = getComponent('Button');
var hasReceiver = false;

var ChromecastButton = /*#__PURE__*/function (_Button) {
  _inheritsLoose(ChromecastButton, _Button);

  function ChromecastButton(player, options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Button.call(this, player, options) || this;

    _this.hide();

    _this.initializeApi();

    if (player.options_.chromecast === undefined) {
      player.options_.chromecast = {};
      player.options_.chromecast.appId = '';
    }

    options.appId = player.options_.chromecast.appId;
    player.chromecast = _assertThisInitialized(_this);

    _this.on(player, 'loadstart', function () {
      if (_this.casting && _this.apiInitialized) {
        _this.onSessionSuccess(_this.apiSession);
      }
    });

    _this.on(player, 'dispose', function () {
      if (_this.casting && _this.apiSession) {
        _this.apiSession.stop(null, null);
      }
    });

    return _this;
  }

  var _proto = ChromecastButton.prototype;

  _proto.buildCSSClass = function buildCSSClass() {
    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this);
  };

  _proto.initializeApi = function initializeApi() {
    var apiConfig;
    var appId;
    var sessionRequest;
    var user_agent = window.navigator && window.navigator.userAgent || '';
    var is_chrome = videojs.browser.IS_CHROME || /CriOS/i.test(user_agent);

    if (!is_chrome || videojs.browser.IS_EDGE || typeof chrome === 'undefined') {
      return;
    }

    if (!chrome.cast || !chrome.cast.isAvailable) {
      videojs.log('Cast APIs not available');

      if (this.tryingReconnect < 10) {
        this.setTimeout(this.initializeApi, 1000);
        ++this.tryingReconnect;
      }

      videojs.log('Cast APIs not available. Max reconnect attempt');
      return;
    }

    videojs.log('Cast APIs are available');
    appId = this.options_.appId || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
    sessionRequest = new chrome.cast.SessionRequest(appId);
    apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionJoinedListener.bind(this), this.receiverListener.bind(this));
    return chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.castError.bind(this));
  };

  _proto.castError = function castError(_castError) {
    var error = {
      code: _castError.code,
      message: _castError.description
    };

    switch (_castError.code) {
      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
      case chrome.cast.ErrorCode.EXTENSION_MISSING:
      case chrome.cast.ErrorCode.EXTENSION_NOT_COMPATIBLE:
      case chrome.cast.ErrorCode.INVALID_PARAMETER:
      case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
      case chrome.cast.ErrorCode.SESSION_ERROR:
      case chrome.cast.ErrorCode.CHANNEL_ERROR:
      case chrome.cast.ErrorCode.TIMEOUT:
        this.addClass('error');
        break;

      case chrome.cast.ErrorCode.CANCEL:
        break;

      default:
        this.player_.error(error);
        break;
    }

    return videojs.log('Cast Error: ' + JSON.stringify(_castError));
  };

  _proto.onInitSuccess = function onInitSuccess() {
    if (hasReceiver) {
      this.show();
    } else {
      this.hide();
    }

    return this.apiInitialized = true;
  };

  _proto.sessionJoinedListener = function sessionJoinedListener(session) {
    if (session.media.length) {
      this.apiSession = session;
      this.onMediaDiscovered(session.media[0]);
    }

    return console.log('Session joined');
  };

  _proto.receiverListener = function receiverListener(availability) {
    if (availability === 'available') {
      hasReceiver = true;
      return this.show();
    }

    hasReceiver = false;
    return this.hide();
  };

  _proto.doLaunch = function doLaunch() {
    videojs.log('Cast video: ' + this.player_.cache_.src);

    if (this.apiInitialized) {
      return chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.castError.bind(this));
    }

    return videojs.log('Session not initialized');
  };

  _proto.onSessionSuccess = function onSessionSuccess(session) {
    var image;
    var key;
    var loadRequest;
    var mediaInfo;
    var ref;
    var value;
    this.apiSession = session;
    var source = this.player_.cache_.src;
    var type = this.player_.currentType();
    videojs.log('Session initialized: ' + session.sessionId + ' source : ' + source + ' type : ' + type);
    mediaInfo = new chrome.cast.media.MediaInfo(source, type);
    mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();

    if (this.options_.playerOptions.chromecast === undefined) {
      this.options_.playerOptions.chromecast = {};
      this.options_.playerOptions.chromecast.metadata = '';
    } else if (this.options_.playerOptions.chromecast.metadata === undefined) {
      this.options_.playerOptions.chromecast.metadata = '';
    }

    if (this.options_.playerOptions.chromecast.metadata !== '') {
      ref = this.options_.playerOptions.chromecast.metadata;

      for (key in ref) {
        value = ref[key];
        mediaInfo.metadata[key] = value;
      }
    } // Add poster image on player


    var poster = this.player().poster();

    if (poster) {
      image = new chrome.cast.Image(poster);
      mediaInfo.metadata.images = [image];
    }

    var plTracks = this.player().textTracks();
    var remotePlTracks = this.player().remoteTextTrackEls();
    var tracks = [];
    var i = 0;
    var remotePlTrack;
    var plTrack;
    var trackId = 0;
    var track;

    if (plTracks) {
      for (i = 0; i < plTracks.length; i++) {
        plTrack = plTracks.tracks_[i];
        remotePlTrack = remotePlTracks && remotePlTracks.trackElements_ && remotePlTracks.trackElements_[i];
        trackId++;
        track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
        track.trackContentId = remotePlTrack ? remotePlTrack.src : 'caption_' + plTrack.language;
        track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
        track.name = plTrack.label;
        track.language = plTrack.language;
        track.customData = null;
        tracks.push(track);
      }

      mediaInfo.textTrackStyle = new chrome.cast.media.TextTrackStyle();
      mediaInfo.textTrackStyle.foregroundColor = '#FFFFFF';
      mediaInfo.textTrackStyle.backgroundColor = '#00000060';
      mediaInfo.textTrackStyle.edgeType = chrome.cast.media.TextTrackEdgeType.DROP_SHADOW;
      mediaInfo.textTrackStyle.windowType = chrome.cast.media.TextTrackWindowType.ROUNDED_CORNERS;
    }

    try {
      plTracks = this.player().audioTracks();

      if (plTracks) {
        for (i = 0; i < plTracks.length; i++) {
          plTrack = plTracks.tracks_[i];
          trackId++;
          track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.AUDIO);
          track.subtype = null;
          track.name = plTrack.label;
          track.language = plTrack.language;
          track.customData = null;
          tracks.push(track);
        }
      }
    } catch (e) {
      videojs.log('get player audioTracks fail' + e);
    }

    if (tracks.length) {
      mediaInfo.tracks = tracks;
    }

    loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);
    loadRequest.autoplay = true;
    loadRequest.currentTime = this.player_.currentTime();
    this.apiSession.loadMedia(loadRequest, this.onMediaDiscovered.bind(this), this.castError.bind(this));
    this.apiSession.addUpdateListener(this.onSessionUpdate.bind(this));
  };

  _proto.onMediaDiscovered = function onMediaDiscovered(media) {
    this.player_.loadTech_('chromecast', {
      type: 'cast',
      apiMedia: media,
      apiSession: this.apiSession
    });
    this.casting = true;
    this.inactivityTimeout = this.player_.options_.inactivityTimeout;
    this.player_.options_.inactivityTimeout = 0;
    this.player_.userActive(true);
    this.addClass('connected');
    this.removeClass('error');
  };

  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
    if (!this.player_.apiMedia) {
      return;
    }

    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  };

  _proto.stopCasting = function stopCasting() {
    return this.apiSession.stop(this.onStopAppSuccess.bind(this), this.castError.bind(this));
  };

  _proto.onStopAppSuccess = function onStopAppSuccess() {
    this.casting = false;
    var time = this.player_.currentTime();
    this.removeClass('connected');
    this.player_.src(this.player_.options_.sources);

    if (!this.player_.paused()) {
      this.player_.one('seeked', function () {
        return this.player_.play();
      });
    }

    this.player_.currentTime(time);
    this.player_.options_.inactivityTimeout = this.inactivityTimeout;
    return this.apiSession = null;
  };

  _proto.handleClick = function handleClick() {
    _Button.prototype.handleClick.call(this);

    if (this.casting) {
      return this.stopCasting();
    }

    return this.doLaunch();
  };

  return ChromecastButton;
}(Button);

ChromecastButton.prototype.tryingReconnect = 0;
ChromecastButton.prototype.inactivityTimeout = 2000;
ChromecastButton.prototype.controlText_ = 'Chromecast';
ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 2, 0, 'chromecastButton');

if (typeof getComponent('ChromecastButton') === 'undefined') {
  Component.registerComponent('ChromecastButton', ChromecastButton);
}

/**
 * @file chromecast-tech.js
 * ChromeCastTech Media Controller - Wrapper for HTML5 Media API
 */
var getTech = videojs.getTech;
var registerTech = videojs.registerTech;
/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class ChromecastTech
 */

var ChromecastTech = videojs.extend(getTech('Tech'), {
  constructor: function constructor(options, ready) {
    var _this = this;

    getTech('Tech').apply(this, arguments);
    this.apiMedia = this.options_.source.apiMedia;
    this.apiSession = this.options_.source.apiSession;
    this.receiver = this.apiSession.receiver.friendlyName;
    var mediaStatusUpdateHandler = this.onMediaStatusUpdate.bind(this);
    var sessionUpdateHanlder = this.onSessionUpdate.bind(this);
    this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);
    this.apiSession.addUpdateListener(sessionUpdateHanlder);
    this.on('dispose', function () {
      _this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);

      _this.apiSession.removeUpdateListener(sessionUpdateHanlder);

      _this.onMediaStatusUpdate();

      _this.onSessionUpdate(false);
    });
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

    this.update();
    this.triggerReady();
  },
  createEl: function createEl() {
    var el = videojs.dom.createEl('div', {
      id: this.options_.techId,
      className: 'vjs-tech vjs-tech-chromecast'
    });
    return el;
  },
  update: function update() {
    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
  },
  onSessionUpdate: function onSessionUpdate(isAlive) {
    if (!this.apiMedia) {
      return;
    }

    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  },
  onStopAppSuccess: function onStopAppSuccess() {
    this.stopTrackingCurrentTime();
    this.apiMedia = null;
  },
  onMediaStatusUpdate: function onMediaStatusUpdate() {
    if (!this.apiMedia) {
      return;
    }

    switch (this.apiMedia.playerState) {
      case chrome.cast.media.PlayerState.BUFFERING:
        this.trigger('waiting');
        break;

      case chrome.cast.media.PlayerState.IDLE:
        this.trigger('timeupdate');
        this.trigger('ended');
        break;

      case chrome.cast.media.PlayerState.PAUSED:
        this.trigger('pause');
        this.paused_ = true;
        break;

      case chrome.cast.media.PlayerState.PLAYING:
        this.trigger('playing');
        this.trigger('play');
        this.paused_ = false;
        break;
    }
  },

  /**
     * Set video
     *
     * @param {Object=} src Source object
     * @method setSrc
     */
  src: function src(_src) {},
  currentSrc: function currentSrc() {
    if (!this.apiMedia) {
      return;
    }

    return this.apiMedia.media.contentId;
  },
  handleAudioTracksChange: function handleAudioTracksChange() {
    var trackInfo = [];
    var tTracks = this.textTracks();
    var tracks = this.audioTracks();

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.enabled) {
        // set id of cuurentTrack audio
        trackInfo.push(i + 1 + tTracks.length);
      }
    }

    if (this.apiMedia && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
    }
  },
  handleVideoTracksChange: function handleVideoTracksChange() {},
  handleTextTracksChange: function handleTextTracksChange() {
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

    if (this.apiMedia && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
    }
  },
  onTrackSuccess: function onTrackSuccess() {
    return videojs.log('track added');
  },
  onTrackError: function onTrackError(e) {
    return videojs.log('Cast track Error: ' + JSON.stringify(e));
  },
  castError: function castError(e) {
    return videojs.log('Cast Error: ' + JSON.stringify(e));
  },
  play: function play() {
    if (!this.apiMedia) {
      return;
    }

    if (this.paused_) {
      this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
    }

    return this.paused_ = false;
  },
  pause: function pause() {
    if (!this.apiMedia) {
      return;
    }

    if (!this.paused_) {
      this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
      return this.paused_ = true;
    }
  },
  paused: function paused() {
    return this.paused_;
  },
  ended: function ended() {
    return chrome.cast.media.IdleReason === 'FINISHED';
  },
  currentTime: function currentTime() {
    if (!this.apiMedia) {
      return 0;
    }

    return this.apiMedia.getEstimatedTime();
  },
  setCurrentTime: function setCurrentTime(position) {
    if (!this.apiMedia) {
      return 0;
    }

    var request;
    request = new chrome.cast.media.SeekRequest();
    request.currentTime = position; // if (this.player_.controlBar.progressControl.seekBar.videoWasPlaying) {
    //  request.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START;
    // }

    return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
  },
  onSeekSuccess: function onSeekSuccess(position) {
    videojs.log('seek success' + position);
  },
  volume: function volume() {
    return this.volume_;
  },
  duration: function duration() {
    if (!this.apiMedia) {
      return 0;
    }

    return this.apiMedia.media.duration || Infinity;
  },
  controls: function controls() {
    return false;
  },
  setVolume: function setVolume(level, mute) {
    if (mute === void 0) {
      mute = false;
    }

    var request;
    var volume;

    if (!this.apiMedia) {
      return;
    }

    volume = new chrome.cast.Volume();
    volume.level = level;
    volume.muted = mute;
    this.volume_ = volume.level;
    this.muted_ = mute;
    request = new chrome.cast.media.VolumeRequest();
    request.volume = volume;
    this.apiMedia.setVolume(request, this.mediaCommandSuccessCallback.bind(this, 'Volume changed'), this.castError.bind(this));
    return this.trigger('volumechange');
  },
  mediaCommandSuccessCallback: function mediaCommandSuccessCallback(information) {
    videojs.log(information);
  },
  muted: function muted() {
    return this.muted_;
  },
  setMuted: function setMuted(muted) {
    return this.setVolume(this.volume_, muted);
  },
  supportsFullScreen: function supportsFullScreen() {
    return false;
  },
  resetSrc_: function resetSrc_(callback) {
    callback();
  },
  dispose: function dispose() {
    this.resetSrc_(Function.prototype);
    getTech('Tech').dispose(this);
  },
  seeking: function seeking() {
    return false;
  },
  seekable: function seekable() {
    return false;
  },
  playbackRate: function playbackRate() {
    return 1;
  }
});
ChromecastTech.prototype.paused_ = false;
ChromecastTech.prototype.timerStep = 1000;
/* ChromecastTech Support Testing -------------------------------------------------------- */

ChromecastTech.isSupported = function () {
  return true;
}; // Add Source Handler pattern functions to this tech


getTech('Tech').withSourceHandlers(ChromecastTech);
/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */

ChromecastTech.nativeSourceHandler = {};
/**
 * Check if Flash can play the given videotype
 *
 * @param  {string} type    The mimetype to check
 * @return {string}         'probably', 'maybe', or '' (empty string)
 */

ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
  var dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i;
  var dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i;

  if (dashTypeRE.test(source)) {
    return 'probably';
  } else if (dashExtRE.test(source)) {
    return 'maybe';
  }

  return '';
};
/*
 * Check Flash can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */


ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
  // If a type was provided we should rely on that
  if (source.type) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};
/*
 * Pass the source to the flash object
 * Adaptive source handlers will have more complicated workflows before passing
 * video data to the video element
 *
 * @param  {Object} source    The source object
 * @param  {Flash} tech   The instance of the Flash tech
 */


ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};
/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */


ChromecastTech.nativeSourceHandler.dispose = function () {}; // Register the native source handler


ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
/*
 * Set the tech's volume control support status
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.featuresVolumeControl = true;
/*
 * Set the tech's playbackRate support status
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.featuresPlaybackRate = false;
/*
 * Set the tech's status on moving the video element.
 * In iOS, if you move a video element in the DOM, it breaks video playback.
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.movingMediaElementInDOM = false;
/*
 * Set the the tech's fullscreen resize support status.
 * HTML video is able to automatically resize when going to fullscreen.
 * (No longer appears to be used. Can probably be removed.)
 */

ChromecastTech.prototype.featuresFullscreenResize = false;
/*
 * Set the tech's timeupdate event support status
 * (this disables the manual timeupdate events of the Tech)
 */

ChromecastTech.prototype.featuresTimeupdateEvents = false;
/*
 * Set the tech's progress event support status
 * (this disables the manual progress events of the Tech)
 */

ChromecastTech.prototype.featuresProgressEvents = false;
/*
 * Sets the tech's status on native text track support
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.featuresNativeTextTracks = true;
/*
 * Sets the tech's status on native audio track support
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.featuresNativeAudioTracks = true;
/*
 * Sets the tech's status on native video track support
 *
 * @type {Boolean}
 */

ChromecastTech.prototype.featuresNativeVideoTracks = false; // videojs.options.chromecast = {};
// Register the compnent with video.js, avoid double registration

if (typeof getTech('ChromecastTech') === 'undefined') {
  registerTech('chromecast', ChromecastTech);
}

var registerComponent$1 = videojs.registerComponent || videojs.component;
var getComponent$1 = videojs.getComponent;
var GoogleChromecast = videojs.extend(getComponent$1('Component'), {
  constructor: function constructor(player, options) {
    getComponent$1('Component').apply(this, arguments);
  }
});
GoogleChromecast.prototype.options_ = {};
videojs.options.children.push('chromecast');
videojs.addLanguage('en', {
  'CASTING TO': 'CASTING TO'
}); // Register the compnent with video.js, avoid double registration

if (typeof getComponent$1('GoogleChromecast') === 'undefined') {
  registerComponent$1('GoogleChromecast', GoogleChromecast);
}

var registerPlugin = videojs$1.registerPlugin || videojs$1.plugin;
var getPlugin = videojs$1.getPlugin || videojs$1.plugin;
var registerComponent$2 = videojs$1.registerPlugin;
var getComponent$2 = videojs$1.getComponent;
/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */

var chromecast = function chromecast(options) {}; // Register the plugin with video.js, avoid double registration


if (typeof getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast);
} // Include the version number.


chromecast.VERSION = version;

export default chromecast;
