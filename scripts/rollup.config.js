const generate = require('videojs-generate-rollup-config');

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
const options = {
  globals(defaults) {
    return {
      browser: Object.assign(defaults.browser, {
        'http': 'http',
        'events': 'events',
        'dgram': 'dgram',
        'util': 'util',
        'buffer': 'buffer',
        'os': 'os',
        'crypto': 'crypto',
        'assert': 'assert',
        'stream': 'stream',
        'string_decoder': 'string_decoder',
        'timers': 'timers',
        'tls': 'tls',
        'fs': 'fs',
        'https': 'https',
        'url': 'url',
        'path': 'path',
        'querystring': 'querystring',
        'zlib': 'zlib',
        'buffer-indexof': 'bufferIndexof'
      }),
      module: Object.assign(defaults.module, {
          'http': 'http',
          'events': 'events',
          'dgram': 'dgram',
          'util': 'util',
          'buffer': 'buffer',
          'os': 'os',
          'crypto': 'crypto',
          'assert': 'assert',
          'stream': 'stream',
          'string_decoder': 'string_decoder',
          'timers': 'timers',
          'tls': 'tls',
          'fs': 'fs',
          'https': 'https',
          'url': 'url',
          'path': 'path',
          'querystring': 'querystring',
          'zlib': 'zlib',
          'buffer-indexof': 'bufferIndexof'
      }),
      test: Object.assign(defaults.test, {
          'http': 'http',
          'events': 'events',
          'dgram': 'dgram',
          'util': 'util',
          'buffer': 'buffer',
          'os': 'os',
          'crypto': 'crypto',
          'assert': 'assert',
          'stream': 'stream',
          'string_decoder': 'string_decoder',
          'timers': 'timers',
          'tls': 'tls',
          'fs': 'fs',
          'https': 'https',
          'url': 'url',
          'path': 'path',
          'querystring': 'querystring',
          'zlib': 'zlib',
          'buffer-indexof': 'bufferIndexof'
      })
    };
  }
};
const config = generate(options);

// Add additonal builds/customization here!

// export the builds to rollup
export default Object.values(config.builds);
