/**
 * @file google-chromecast.js
 */
import videojs from 'video.js/dist/alt/video.core.novtt.min'
import ChromecastButton from './component/control-bar/chromecast-button'

const Component = videojs.getComponent('Component')
class Chromecast extends Component {
    constructor (player, options) {
        super(player, options)

        const buttonChromecast = new ChromecastButton(player, options)

        window.__onGCastApiAvailable = function (isAvailable) {
            if (isAvailable) {
                buttonChromecast.initCastPlayer(player, options)
            }
        }

        if (options.mdns !== undefined && options.mdns) {
            window.__onGCastApiAvailable(true)
        }
    }
}

Chromecast.prototype.options_ = {}
videojs.options.children.push('chromecast')
videojs.addLanguage('en', { 'CASTING TO': 'CASTING TO' })

if (typeof videojs.getComponent('Chromecast') === 'undefined') {
    videojs.registerComponent('Chromecast', Chromecast);
}

export default Chromecast;
