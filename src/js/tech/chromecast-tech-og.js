import videojs from 'video.js/dist/alt/video.core.novtt.min'
/**
 * @file chromecast-tech.js
 */
const Tech = videojs.getTech('Tech')

const PLAYER_STATE = {
    IDLE: 'IDLE',
    BUFFERING: 'BUFFERING',
    LOADED: 'LOADED',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED'
}

/**
 * Chromecast Media Controller - Wrapper for Chromecast Tech API
 *
 * @param {Object=} params Object of option names and values
 * @param {Function=} options Options callback function
 * @extends Tech
 * @class Chromecast
 */
class ChromecastTech extends Tech {
    constructor (options, ready = {}) {
        super(options, ready)

        this.castBtn = this.options_.source.cast_

        if (this.castBtn.mDNS) {
            this.apiSession = this.options_.source.apiSession
            this.receiver = this.castBtn.selectedDevice.friendlyName
        } else {
            this.apiSession = this.options_.source.apiSession
            this.receiver = this.apiSession.getCastDevice().friendlyName
        }

        this.castBtn.currentTech = this

        this.initializeUI()
        this.update()

        this.triggerReady()
    }

    initializeUI () {
        this.on('dispose', () => {
            this.onMediaStatusUpdate()
            this.onSessionUpdate(false)
        })
    }

    createEl () {
        const el = videojs.dom.createEl('div', {
            id: this.options_.techId,
            className: 'vjs-tech vjs-tech-chromecast'
        })
        return el
    }

    update () {
        this.el_.innerHTML = `<div class="casting-image" style="background-image: url('${this.options_.poster}')"></div><div class="casting-overlay"><div class="casting-information"><div class="casting-icon"></div><div class="casting-description"><small>${this.localize('CASTING TO')}</small><br>${this.receiver}</div></div></div>`
    }

    onSessionUpdate (isAlive) {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }
        if (!isAlive) {
            return this.onStopAppSuccess()
        }
    }

    onStopAppSuccess () {
        this.apiSession = null
    }

    onMediaStatusUpdate () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }

        switch (this.castBtn.playerState) {
            case PLAYER_STATE.BUFFERING:
                this.trigger('waiting')
                break
            case PLAYER_STATE.IDLE:
                this.trigger('timeupdate')
                this.trigger('ended')

                break
            case PLAYER_STATE.PAUSED:
                this.trigger('pause')
                this.paused_ = true
                break
            case PLAYER_STATE.PLAYING:
                this.trigger('playing')
                this.trigger('play')
                this.paused_ = false
                break
        }
    }

    src (src) {}

    currentSrc () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }
        return this.castBtn.sources.src
    }

    castError (e) {
        return videojs.log('Cast Error: ' + JSON.stringify(e))
    }

    controls () {
        return false
    }

    play () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }
        if (this.paused_) {
            if (this.castBtn.mDNS) {
                this.castBtn.selectedDevice.resume( (err) => {
                    if (err) { videojs.log(err); }
                    this.castBtn.playerHandler.play()
                });
            } else {
                this.castBtn.playerHandler.play()
            }
        }
        this.paused_ = false
        this.trigger('play')
    }

    pause () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }

        if (!this.paused_) {
            if (this.castBtn.mDNS) {
                this.castBtn.selectedDevice.pause( (err) => {
                    if (err) { videojs.log(err); }
                    this.castBtn.playerHandler.pause()
                });
            } else {
                this.castBtn.playerHandler.pause()
            }
        }

        this.paused_ = true
        this.trigger('pause')
    }

    paused () {
        return this.paused_
    }

    ended () {
        return chrome.cast.media.IdleReason === 'FINISHED'
    }

    currentTime () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return 0
        }

        return this.castBtn.remotePlayer.currentTime
    }

    setCurrentTime (time) {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return 0
        }

        if (this.castBtn.mDNS) {
            this.castBtn.selectedDevice.seekTo(time, (err) => {
                if (err) { videojs.log(err); }
                this.castBtn.remotePlayer.currentTime = time
                this.castBtn.remotePlayerController.seek()
            });
        } else {
            this.castBtn.remotePlayer.currentTime = time
            this.castBtn.remotePlayerController.seek()
        }

        return time
    }

    volume () {
        return this.volume_
    }

    buffered () { }

    duration () {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return 0
        }
        return this.castBtn.player_.duration()
    }

    seeked () {
        return true
    }

    seeking () {
        return true
    }

    seekable () {
        return true
    }

    setVolume (level, mute = false) {
        if (!this.apiSession && !this.castBtn.mDNS) {
            return
        }

        const volume = new chrome.cast.Volume()
        volume.level = level
        volume.muted = mute
        this.volume_ = volume.level
        this.muted_ = mute
        const request = new chrome.cast.media.VolumeRequest()
        request.volume = volume

        if (this.castBtn.mDNS) {
            this.castBtn.selectedDevice.setVolume(volume.level, (err) => {
                if (err) { videojs.log(err); }
            });
        }

        this.trigger('volumechange')
    }

    muted () {
        return this.muted_
    }

    setMuted (muted) {
        var volume = this.volume_
        if (muted) {
            volume = 0
        }
        if (this.castBtn.mDNS) {
            this.castBtn.selectedDevice.setVolume(volume, (err) => {
                if (err) { videojs.log(err); }
                this.setVolume(volume, muted);
            });
        } else {
            this.setVolume(volume, muted);
        }
    }

    supportsFullScreen () {
        return false
    }

    dispose () {
        super.dispose()
    }

    setPlaybackRate (rate) {
        this.playbackRate_ = rate
    }

    playbackRate () {
        return this.playbackRate_
    }
}

ChromecastTech.prototype.paused_ = false
ChromecastTech.prototype.options_ = {}
ChromecastTech.isSupported = function () {
    return true
}
Tech.withSourceHandlers(ChromecastTech)
ChromecastTech.nativeSourceHandler = {}
ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
    const dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i
    const dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i

    if (dashTypeRE.test(source)) {
        return 'probably'
    } else if (dashExtRE.test(source)) {
        return 'maybe'
    } else {
        return ''
    }
}
ChromecastTech.nativeSourceHandler.canPlaySource = function (source) {
    if (source.type) {
        return ChromecastTech.nativeSourceHandler.canPlayType(source.type)
    } else if (source.src) {
        return ChromecastTech.nativeSourceHandler.canPlayType(source.src)
    }
    return ''
}
ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
    tech.src(source.src)
}
ChromecastTech.nativeSourceHandler.dispose = function () {}
ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler)
ChromecastTech.prototype.featuresVolumeControl = true
ChromecastTech.prototype.featuresPlaybackRate = false
ChromecastTech.prototype.movingMediaElementInDOM = true
ChromecastTech.prototype.featuresTimeupdateEvents = true
ChromecastTech.prototype.featuresProgressEvents = true
ChromecastTech.prototype.featuresNativeTextTracks = false
ChromecastTech.prototype.featuresNativeAudioTracks = false
ChromecastTech.prototype.featuresNativeVideoTracks = false

videojs.options.chromecast = {}

if (typeof videojs.getTech('ChromecastTech') === 'undefined') {
    videojs.registerTech('ChromecastTech', ChromecastTech);
}

if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
    Tech.registerTech('ChromecastTech', ChromecastTech);
}

export default ChromecastTech;
