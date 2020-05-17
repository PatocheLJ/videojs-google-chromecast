import videojs from 'video.js';
import {version as VERSION} from '../package.json';
import './js/sender';
import Mdns from 'node-mdns-easy';
import Chromecast from './js/google-chromecast';

/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const chromecast = function chromecast(options) {
    let player = this;

    if (options === false || (options && options.enabled === false)) {
        return;
    }

    if(options.mdns !== undefined || options.mdns) {
        const mdns = new Mdns();
        const browser = mdns.createBrowser(mdns.getLibrary().tcp('googlecast'));

        browser.on('serviceUp', (service) => {
            console.log(service);
        });

        browser.on('serviceDown', (service) => {
            console.log(service);
        });

        if (browser.ready) {
            browser.browse();
        } else {
            browser.once('ready', () => {
                browser.browse();
            });
        }
    }

    const allowedOptions = ["appId", "altSource", "onStop", "onError"];
    allowedOptions.forEach(opt => {
        if (player.options_.chromecast === undefined) {
            player.options_.chromecast = [];
        }
        if (player.options_.chromecast[opt] === undefined) {
            options[opt] = '';
        } else {
            options[opt] = player.options_.chromecast[opt];
        }
    });


    let googleCast = new Chromecast(player, options);
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;

// Register the plugin with video.js, avoid double registration
if (typeof videojs.getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast);
}

// Include the version number.
chromecast.VERSION = VERSION;

export default chromecast;
