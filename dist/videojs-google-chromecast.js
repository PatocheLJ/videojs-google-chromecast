/**
 * videojs-google-chromecast
 * @version 0.0.3
 * @copyright 2020 mikadoplus <plo@mikadoplus.lu>
 * @license UNLICENSED
 */
/*! @name videojs-google-chromecast @version 0.0.3 @license UNLICENSED */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global = global || self, global.videojsGoogleChromecast = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

  videojs = videojs && Object.prototype.hasOwnProperty.call(videojs, 'default') ? videojs['default'] : videojs;

  var version = "0.0.3";

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  var Component = videojs.getComponent('Component');
  var ControlBar = videojs.getComponent('ControlBar');
  var Button = videojs.getComponent('Button');
  var hasReceiver = false;

  var ChromecastButton = /*#__PURE__*/function (_Button) {
    inheritsLoose(ChromecastButton, _Button);

    function ChromecastButton(player, options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      var allowedOptions = ["appId", "altSource", "onStop", "onError"];
      allowedOptions.forEach(function (opt) {
        options[opt] = player.options_.chromecast[opt];
      });
      _this = _Button.call(this, player, options) || this;

      _this.hide();

      _this.initializeApi();

      _this.source = null;
      _this.tryingReconnect = 0;
      player.chromecast = assertThisInitialized(_this);

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
      return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
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

      return videojs.log('Session joined');
    };

    _proto.receiverListener = function receiverListener(availability) {
      if (this.disposed) return;

      if (availability === 'available') {
        hasReceiver = true;
        return this.show();
      }

      hasReceiver = false;
      return this.hide();
    };

    _proto.findSource = function findSource() {
      if (typeof this.options_.altSource == "function") {
        return this.source = this.options_.altSource.call(this);
      }

      return this.source = this.options_.altSource || {
        src: this.player_.cache_.src,
        type: this.player_.currentType()
      };
    };

    _proto.doLaunch = function doLaunch() {
      this.findSource();
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
      videojs.log('Session initialized: ' + session.sessionId + ' source : ' + this.source.src + ' type : ' + this.source.type);
      mediaInfo = new chrome.cast.media.MediaInfo(this.source.src, this.source.type);
      mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();

      if (this.options_.playerOptions.chromecast.metadata) {
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
      console.log(this.player_);
      this.player_.loadTech_('ChromecastTech', {
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

      if (this.options_.onStop) {
        this.options_.onStop.call(this, this.source, time);
      } else {
        this.player_.reset();
        this.player_.src(this.source);

        if (!this.player_.paused()) {
          this.player_.one('seeked', function () {
            return this.player_.play();
          });
        }

        this.player_.currentTime(time);
      }

      this.player_.inactivityTimeout = this.inactivityTimeout;
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

  if (typeof Component.getComponent('ChromecastButton') === 'undefined') {
    Component.registerComponent('ChromecastButton', ChromecastButton);
  }

  var Component$1 = videojs.getComponent('Component');
  var Tech = videojs.getComponent('Tech');
  /**
   * Chromecast Media Controller - Wrapper for HTML5 Media API
   *
   * @param {Object=} params Object of option names and values
   * @param {Function=} options Options callback function
   * @extends Tech
   * @class Chromecast
   */

  var ChromecastTech = /*#__PURE__*/function (_Tech) {
    inheritsLoose(ChromecastTech, _Tech);

    function ChromecastTech(options, ready) {
      var _this;

      if (ready === void 0) {
        ready = {};
      }

      _this = _Tech.call(this, options, ready) || this;
      _this.apiMedia = _this.options_.source.apiMedia;
      _this.apiSession = _this.options_.source.apiSession;
      _this.receiver = _this.apiSession.receiver.friendlyName;

      var mediaStatusUpdateHandler = _this.onMediaStatusUpdate.bind(assertThisInitialized(_this));

      var sessionUpdateHandler = _this.onSessionUpdate.bind(assertThisInitialized(_this));

      _this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);

      _this.apiSession.addUpdateListener(sessionUpdateHandler);

      _this.on('dispose', function () {
        _this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);

        _this.apiSession.removeUpdateListener(sessionUpdateHandler);

        _this.onMediaStatusUpdate();

        _this.onSessionUpdate(false);
      });

      var tracks = _this.textTracks();

      if (tracks) {
        var changeHandler = _this.handleTextTracksChange.bind(assertThisInitialized(_this));

        tracks.addEventListener('change', changeHandler);

        _this.on('dispose', function () {
          tracks.removeEventListener('change', changeHandler);
        });

        _this.handleTextTracksChange();
      }

      try {
        tracks = _this.audioTracks();

        if (tracks) {
          var _changeHandler = _this.handleAudioTracksChange.bind(assertThisInitialized(_this));

          tracks.addEventListener('change', _changeHandler);

          _this.on('dispose', function () {
            tracks.removeEventListener('change', _changeHandler);
          });
        }
      } catch (e) {
        videojs.log('get player audioTracks fail' + e);
      }

      try {
        tracks = _this.videoTracks();

        if (tracks) {
          var _changeHandler2 = _this.handleVideoTracksChange.bind(assertThisInitialized(_this));

          tracks.addEventListener('change', _changeHandler2);

          _this.on('dispose', function () {
            tracks.removeEventListener('change', _changeHandler2);
          });
        }
      } catch (e) {
        videojs.log('get player videoTracks fail' + e);
      }

      _this.update();

      _this.triggerReady();

      return _this;
    }

    var _proto = ChromecastTech.prototype;

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
      if (!this.apiMedia) {
        return;
      }

      if (!isAlive) {
        return this.onStopAppSuccess();
      }
    };

    _proto.onStopAppSuccess = function onStopAppSuccess() {
      this.stopTrackingCurrentTime();
      this.apiMedia = null;
    };

    _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
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
    };

    _proto.src = function src(_src) {};

    _proto.currentSrc = function currentSrc() {
      if (!this.apiMedia) {
        return;
      }

      return this.apiMedia.media.contentId;
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

      if (this.apiMedia && trackInfo.length) {
        this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
        return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
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

      if (this.apiMedia && trackInfo.length) {
        this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
        return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
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

    _proto.play = function play() {
      if (!this.apiMedia) {
        return;
      }

      if (this.paused_) {
        this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
      }

      return this.paused_ = false;
    };

    _proto.pause = function pause() {
      if (!this.apiMedia) {
        return;
      }

      if (!this.paused_) {
        this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
        return this.paused_ = true;
      }
    };

    _proto.paused = function paused() {
      return this.paused_;
    };

    _proto.ended = function ended() {
      return chrome.cast.media.IdleReason === 'FINISHED';
    };

    _proto.currentTime = function currentTime() {
      if (!this.apiMedia) {
        return 0;
      }

      return this.apiMedia.getEstimatedTime();
    };

    _proto.setCurrentTime = function setCurrentTime(position) {
      if (!this.apiMedia) {
        return 0;
      }

      var request;
      request = new chrome.cast.media.SeekRequest();
      request.currentTime = position; // if (this.player_.controlBar.progressControl.seekBar.videoWasPlaying) {
      //  request.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START;
      // }

      return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
    };

    _proto.onSeekSuccess = function onSeekSuccess(position) {
      videojs.log('seek success' + position);
    };

    _proto.volume = function volume() {
      return this.volume_;
    };

    _proto.duration = function duration() {
      if (!this.apiMedia) {
        return 0;
      }

      return this.apiMedia.media.duration || Infinity;
    };

    _proto.controls = function controls() {
      return false;
    };

    _proto.setVolume = function setVolume(level, mute) {
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
    };

    _proto.mediaCommandSuccessCallback = function mediaCommandSuccessCallback(information) {
      videojs.log(information);
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
      this.resetSrc_(Function.prototype);

      _Tech.prototype.dispose.call(this, this);
    };

    _proto.seeking = function seeking() {
      return false;
    };

    _proto.seekable = function seekable() {
      return false;
    };

    _proto.playbackRate = function playbackRate() {
      return 1;
    };

    return ChromecastTech;
  }(Tech);

  ChromecastTech.prototype.paused_ = false;
  ChromecastTech.prototype.options_ = {};
  ChromecastTech.prototype.timerStep = 1000;
  /* Chromecast Support Testing -------------------------------------------------------- */

  ChromecastTech.isSupported = function () {
    return true;
  }; // Add Source Handler pattern functions to this tech


  Tech.withSourceHandlers(ChromecastTech);
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
   * @param  {String} type    The mimetype to check
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */

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

  ChromecastTech.prototype.featuresNativeVideoTracks = false;
  videojs.options.chromecast = {}; // Register the compnent with video.js, avoid double registration

  if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
    Tech.registerTech('ChromecastTech', ChromecastTech);
  }

  var Component$2 = videojs.getComponent('Component');

  var Chromecast = /*#__PURE__*/function (_Component) {
    inheritsLoose(Chromecast, _Component);

    function Chromecast(player, options) {
      return _Component.call(this, player, options) || this;
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
    if (options === false || options && options.enabled === false) {
      return;
    }

    var player = this;
    player.addChild('Chromecast', options);
  }; // Cross-compatibility for Video.js 5 and 6.


  var registerPlugin = videojs.registerPlugin || videojs.plugin; // Register the plugin with video.js, avoid double registration

  if (typeof videojs.getPlugin('chromecast') === 'undefined') {
    registerPlugin('chromecast', chromecast);
  } // Include the version number.


  chromecast.VERSION = version;

  return chromecast;

})));
