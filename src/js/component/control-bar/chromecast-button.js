/**
 * @file chromecast-button.js
 */
const registerComponent = videojs.registerComponent || videojs.component;
const getComponent = videojs.getComponent;
const ControlBar = getComponent('ControlBar');
const Component = getComponent('Component');
const Button = getComponent('Button');

let hasReceiver = false;

class ChromecastButton extends Button {
  constructor(player, options = {}) {
    super(player, options);
    this.hide();
    this.initializeApi();
    if (player.options_.chromecast === undefined) {
      player.options_.chromecast = {};
      player.options_.chromecast.appId = '';
    }
    options.appId = player.options_.chromecast.appId;
    player.chromecast = this;

    this.on(player, 'loadstart', () => {
      if (this.casting && this.apiInitialized) {
        this.onSessionSuccess(this.apiSession);
      }
    });

    this.on(player, 'dispose', () => {
      if (this.casting && this.apiSession) {
        this.apiSession.stop(null, null);
      }
    });
  }

  buildCSSClass() {
    return `vjs-chromecast-button ${super.buildCSSClass()}`;
  }

  initializeApi() {
    let apiConfig;
    let appId;
    let sessionRequest;

    const user_agent = window.navigator && window.navigator.userAgent || '';
    const is_chrome = videojs.browser.IS_CHROME || (/CriOS/i).test(user_agent);

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
  }

  castError(castError) {

    const error = {
      code: castError.code,
      message: castError.description
    };

    switch (castError.code) {
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
    return videojs.log('Cast Error: ' + (JSON.stringify(castError)));
  }

  onInitSuccess() {
    if (hasReceiver) {
      this.show();
    } else {
      this.hide();
    }
    return this.apiInitialized = true;
  }

  sessionJoinedListener(session) {
    if (session.media.length) {
      this.apiSession = session;
      this.onMediaDiscovered(session.media[0]);
    }
    return console.log('Session joined');
  }

  receiverListener(availability) {
    if (availability === 'available') {
      hasReceiver = true;
      return this.show();
    }
    hasReceiver = false;
    return this.hide();

  }

  doLaunch() {
    videojs.log('Cast video: ' + (this.player_.cache_.src));
    if (this.apiInitialized) {
      return chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.castError.bind(this));
    }
    return videojs.log('Session not initialized');

  }

  onSessionSuccess(session) {
    let image;
    let key;
    let loadRequest;
    let mediaInfo;
    let ref;
    let value;

    this.apiSession = session;
    const source = this.player_.cache_.src;
    const type = this.player_.currentType();

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

    }
    // Add poster image on player
    const poster = this.player().poster();

    if (poster) {
      image = new chrome.cast.Image(poster);
      mediaInfo.metadata.images = [image];
    }

    let plTracks = this.player().textTracks();
    const remotePlTracks = this.player().remoteTextTrackEls();
    const tracks = [];
    let i = 0;
    let remotePlTrack;
    let plTrack;
    let trackId = 0;
    let track;

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
  }

  onMediaDiscovered(media) {
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
  }

  onSessionUpdate(isAlive) {
    if (!this.player_.apiMedia) {
      return;
    }
    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  }

  stopCasting() {
    return this.apiSession.stop(this.onStopAppSuccess.bind(this), this.castError.bind(this));
  }

  onStopAppSuccess() {
    this.casting = false;
    const time = this.player_.currentTime();

    this.removeClass('connected');
    this.player_.src(this.player_.options_.sources);
    if (!this.player_.paused()) {
      this.player_.one('seeked', function() {
        return this.player_.play();
      });
    }
    this.player_.currentTime(time);
    this.player_.options_.inactivityTimeout = this.inactivityTimeout;
    return this.apiSession = null;
  }

  handleClick() {
    super.handleClick();
    if (this.casting) {
      return this.stopCasting();
    }
    return this.doLaunch();

  }
}

ChromecastButton.prototype.tryingReconnect = 0;

ChromecastButton.prototype.inactivityTimeout = 2000;

ChromecastButton.prototype.controlText_ = 'Chromecast';
ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 2, 0, 'chromecastButton');
if (typeof getComponent('ChromecastButton') === 'undefined') {
  Component.registerComponent('ChromecastButton', ChromecastButton);
}
export default ChromecastButton;
