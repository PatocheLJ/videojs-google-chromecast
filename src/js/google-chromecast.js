import videojs from 'video.js';
import ChromecastButton from './component/control-bar/chromecast-button'

let Component = videojs.getComponent('Component');
let ControlBar = videojs.getComponent('ControlBar');
let Button = videojs.getComponent('Button');
let Tech = videojs.getComponent('Tech');

class Chromecast extends Component {
  constructor (player, options) {
    super(player, options);
    let buttonChromecast = new ChromecastButton(player, options);
    window['__onGCastApiAvailable'] = function (isAvailable) {
        if (isAvailable) {
            buttonChromecast.initCastPlayer();
        }
    };

    if(options.mdns !== undefined && options.mdns){
      window.__onGCastApiAvailable(true);
    }

  }
}

Chromecast.prototype.options_ = {};

videojs.options.children.push('chromecast');

videojs.addLanguage('en', { 'CASTING TO': 'CASTING TO' });

// Register the compnent with video.js, avoid double registration
if (typeof Component.getComponent('Chromecast') === 'undefined') {
  Component.registerComponent('Chromecast', Chromecast);
}

export default Chromecast;
