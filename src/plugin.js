import videojs from 'video.js';
import {version as VERSION} from '../package.json';

import GoogleChromecast from './js/google-chromecast';

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
const getPlugin = videojs.getPlugin || videojs.plugin;

/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const chromecast = function(options) {
};

// Register the plugin with video.js, avoid double registration
if (typeof getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast);
}

// Include the version number.
chromecast.VERSION = VERSION;

export default chromecast;
