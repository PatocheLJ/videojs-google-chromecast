<p align="center">
<a href="https://npmjs.org/package/videojs-google-chromecast">
<img src="https://img.shields.io/npm/v/videojs-google-chromecast.svg" alt="">
</a> 
<a href="https://travis-ci.org/mikadoplus/videojs-google-chromecast.js">
<img src="https://travis-ci.org/mikadoplus/videojs-google-chromecast.svg?branch=master" alt="">
</a> 
<a href="https://npmjs.org/package/videojs-google-chromecast">
<img src="https://img.shields.io/npm/dm/videojs-google-chromecast.svg" alt="">
</a>
</p>

# videojs-google-chromecast

Chromecast plugin for videojs, adapted for v7.*

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save mikadoplus/videojs-google-chromecast
```

## Usage

To include videojs-google-chromecast on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-google-chromecast.min.js"></script>
<script>
  var player = videojs('my-video');

  player.googleChromecast();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-google-chromecast via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('mikadoplus/videojs-google-chromecast');

var player = videojs('my-video');

player.googleChromecast();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'mikadoplus/videojs-google-chromecast'], function(videojs) {
  var player = videojs('my-video');

  player.googleChromecast();
});
```

## License

UNLICENSED. Copyright (c) mikadoplus &lt;plo@mikadoplus.lu&gt;


[videojs]: http://videojs.com/
