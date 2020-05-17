const generate = require('videojs-generate-rollup-config');

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
const options = {
  globals(defaults) {
    return {
      browser: Object.assign(defaults.browser, {
        'node-mdns-easy': 'Mdns'
      }),
      module: Object.assign(defaults.module, {
        'node-mdns-easy': 'Mdns'
      }),
      test: Object.assign(defaults.test, {
        'node-mdns-easy': 'Mdns'
      })
    };
  }
};
const config = generate(options);

// Add additonal builds/customization here!

// export the builds to rollup
export default Object.values(config.builds);
