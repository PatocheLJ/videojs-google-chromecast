import videojs from 'video.js';

import ChromecastButton from './component/control-bar/chromecast-button';
import ChromecastTech from './tech/chromecast-tech';

const registerComponent = videojs.registerComponent;
const getComponent = videojs.getComponent;
const Component = getComponent('Component');

const GoogleChromecast = videojs.extend(Component, {
  constructor(player, options) {
      Component.apply(this, arguments);
  }
});

GoogleChromecast.prototype.options_ = {};

videojs.options.children.push('chromecast');

videojs.addLanguage('en', {
  'CASTING TO': 'CASTING TO'
});

// Register the compnent with video.js, avoid double registration
if (typeof getComponent('GoogleChromecast') === 'undefined') {
  registerComponent('GoogleChromecast', GoogleChromecast);
}

export default GoogleChromecast;
