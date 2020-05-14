import videojs from 'video.js';

import ChromecastButton from './component/control-bar/chromecast-button';
import ChromecastTech from './tech/chromecast-tech';

let Component = videojs.getComponent('Component');

class Chromecast extends Component {
  constructor (player, options) {
    super(player, options);
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
