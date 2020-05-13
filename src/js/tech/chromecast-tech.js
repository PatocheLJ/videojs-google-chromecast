/**
 * @file chromecast-tech.js
 * ChromeCastTech Media Controller - Wrapper for HTML5 Media API
 */
const getTech = videojs.getTech;
const registerTech = videojs.registerTech;

/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class ChromecastTech
 */
const ChromecastTech = videojs.extend(getTech('Tech') , {
    constructor: function(options, ready) {
        getTech('Tech').apply(this, arguments);

        this.apiMedia = this.options_.source.apiMedia;
        this.apiSession = this.options_.source.apiSession;
        this.receiver = this.apiSession.receiver.friendlyName;

        let mediaStatusUpdateHandler = this.onMediaStatusUpdate.bind(this);
        let sessionUpdateHanlder = this.onSessionUpdate.bind(this);

        this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);
        this.apiSession.addUpdateListener(sessionUpdateHanlder);

        this.on('dispose', () => {
            this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);
            this.apiSession.removeUpdateListener(sessionUpdateHanlder);
            this.onMediaStatusUpdate()
            this.onSessionUpdate(false);
        });

        let tracks = this.textTracks();
        if (tracks) {
            let changeHandler = this.handleTextTracksChange.bind(this);

            tracks.addEventListener('change', changeHandler);
            this.on('dispose', function () {
                tracks.removeEventListener('change', changeHandler);
            });

            this.handleTextTracksChange();
        }

        try {
            tracks = this.audioTracks();
            if (tracks) {
                let changeHandler = this.handleAudioTracksChange.bind(this);

                tracks.addEventListener('change', changeHandler);
                this.on('dispose', function () {
                    tracks.removeEventListener('change', changeHandler);
                });

            }
        } catch (e) {
            videojs.log('get player audioTracks fail' + e);
        }

        try {
            tracks = this.videoTracks();
            if (tracks) {
                let changeHandler = this.handleVideoTracksChange.bind(this);

                tracks.addEventListener('change', changeHandler);
                this.on('dispose', function () {
                    tracks.removeEventListener('change', changeHandler);
                });

            }
        } catch (e) {
            videojs.log('get player videoTracks fail' + e);
        }

        this.update();
        this.triggerReady();

    },

    createEl: function() {
        let el = videojs.dom.createEl('div', {
            id: this.options_.techId,
            className: 'vjs-tech vjs-tech-chromecast'
        });
        return el;
    },

    update: function() {
        this.el_.innerHTML = `<div class="casting-image" style="background-image: url('${this.options_.poster}')"></div><div class="casting-overlay"><div class="casting-information"><div class="casting-icon"></div><div class="casting-description"><small>${this.localize('CASTING TO')}</small><br>${this.receiver}</div></div></div>`;
    },

    onSessionUpdate: function(isAlive) {
        if (!this.apiMedia) {
            return;
        }
        if (!isAlive) {
            return this.onStopAppSuccess();
        }
    },

    onStopAppSuccess: function() {
        this.stopTrackingCurrentTime();
        this.apiMedia = null;
    },

    onMediaStatusUpdate: function() {
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
    src: function(src) {},

    currentSrc: function() {
        if (!this.apiMedia) {
            return;
        }
        return this.apiMedia.media.contentId;
    },

    handleAudioTracksChange: function() {
        let trackInfo = [];
        let tTracks = this.textTracks();
        let tracks = this.audioTracks();

        if (!tracks) {
            return;
        }

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            if (track.enabled) {
                //set id of cuurentTrack audio
                trackInfo.push((i + 1) + tTracks.length);
            }
        }

        if (this.apiMedia && trackInfo.length) {
            this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
            return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
        }
    },

    handleVideoTracksChange: function() {

    },

    handleTextTracksChange: function() {
        let trackInfo = [];
        let tracks = this.textTracks();

        if (!tracks) {
            return;
        }

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            if (track.mode === 'showing') {
                trackInfo.push(i + 1);
            }
        }

        if (this.apiMedia && trackInfo.length) {
            this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
            return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
        }
    },

    onTrackSuccess: function() {
        return videojs.log('track added');
    },

    onTrackError: function(e) {
        return videojs.log('Cast track Error: ' + JSON.stringify(e));
    },

    castError: function(e) {
        return videojs.log('Cast Error: ' + JSON.stringify(e));
    },

    play: function() {
        if (!this.apiMedia) {
            return;
        }
        if (this.paused_) {
            this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
        }
        return this.paused_ = false;
    },

    pause: function() {
        if (!this.apiMedia) {
            return;
        }
        if (!this.paused_) {
            this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
            return this.paused_ = true;
        }
    },

    paused: function() {
        return this.paused_;
    },

    ended: function() {
        return chrome.cast.media.IdleReason === "FINISHED";
    },

    currentTime: function() {
        if (!this.apiMedia) {
            return 0;
        }
        return this.apiMedia.getEstimatedTime();
    },

    setCurrentTime: function(position) {

        if (!this.apiMedia) {
            return 0;
        }
        let request;
        request = new chrome.cast.media.SeekRequest();
        request.currentTime = position;
        //if (this.player_.controlBar.progressControl.seekBar.videoWasPlaying) {
        //  request.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START;
        //}
        return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
    },

    onSeekSuccess: function(position) {
        videojs.log('seek success' + position);
    },

    volume: function() {
        return this.volume_;
    },

    duration: function() {
        if (!this.apiMedia) {
            return 0;
        }
        return this.apiMedia.media.duration || Infinity;
    },

    controls: function() {
        return false;
    },

    setVolume: function(level, mute = false) {
        let request;
        let volume;
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

    mediaCommandSuccessCallback: function(information) {
        videojs.log(information);
    },

    muted: function() {
        return this.muted_;
    },

    setMuted: function(muted) {
        return this.setVolume(this.volume_, muted);
    },

    supportsFullScreen: function() {
        return false;
    },


    resetSrc_: function(callback) {
        callback();
    },

    dispose: function() {
        this.resetSrc_(Function.prototype);
        getTech('Tech').dispose(this);
    },

    seeking: function() {
        return false;
    },

    seekable: function() {
        return false;
    },

    playbackRate: function() {
        return 1;
    }
});

ChromecastTech.prototype.paused_ = false;


ChromecastTech.prototype.timerStep = 1000;

/* ChromecastTech Support Testing -------------------------------------------------------- */

ChromecastTech.isSupported = function () {
    return true;
};

// Add Source Handler pattern functions to this tech
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
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
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
ChromecastTech.nativeSourceHandler.dispose = function () { };

// Register the native source handler
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

//videojs.options.chromecast = {};

// Register the compnent with video.js, avoid double registration
if (typeof getTech('ChromecastTech') === 'undefined') {
    registerTech('chromecast', ChromecastTech);
}

export default ChromecastTech;
