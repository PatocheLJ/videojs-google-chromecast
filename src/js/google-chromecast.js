import ChromecastButton from './component/control-bar/chromecast-button';
import ChromecastTech from './tech/chromecast-tech';

// Cross-compatibility for Video.js 5 and 6.
const registerComponent = videojs.registerComponent || videojs.component;
const getComponent = videojs.getComponent;

var GoogleChromecast = videojs.extend(getComponent('Component') , {
    constructor: function(player, options) {
        getComponent('Component').apply(this, arguments);
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
