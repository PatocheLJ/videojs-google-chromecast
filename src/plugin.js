import videojs from 'video.js/dist/alt/video.core.novtt.min'
import Chromecast from './js/google-chromecast'
import ChromecastTechBis from './js/tech/chromecast-tech-og'

import { version as VERSION } from '../package.json'

/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const chromecast = function (options) {
  const player = this

  if (options === false || (options && options.enabled === false)) {
    return
  }

  var allowedOptions = ['appId', 'altSource', 'metadata', 'searchAttempts', 'timePerAttempt', 'onStop', 'onError']
  allowedOptions.forEach(function (opt) {
    if (player.options_.chromecast === undefined) {
      player.options_.chromecast = []
    }

      options[opt] = ''

    if (player.options_.chromecast[opt] !== undefined) {
      options[opt] = player.options_.chromecast[opt]
    }
  })

  if (options.videojs != undefined && options.videojs != '') {
      var videojs = options.videojs;
      const ChromecastTech = require('../src/js/tech/chromecast-tech')(videojs)
  }

  var googleChromecast = new Chromecast(player, options)
}

const registerPlugin = videojs.registerPlugin || videojs.plugin

if (typeof videojs.getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast)
}

chromecast.VERSION = VERSION

export default chromecast;
