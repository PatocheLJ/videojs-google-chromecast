<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [CONTRIBUTING](#contributing)
  - [Getting Started](#getting-started)
    - [Making Changes](#making-changes)
    - [Running Tests](#running-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# CONTRIBUTING

## Getting Started

Make sure you have Node.js 8 or higher and npm installed.

1. Clone this repository
1. Install dependencies: `npm install`
1. Run a development server: `npm start`

### Making Changes

Refer to the [video.js plugin conventions][conventions] for more detail on best practices and tooling for video.js plugin authorship.

When you've made your changes, push your commit(s) to your fork and issue a pull request against the original repository.

### Running Tests

Testing is a crucial part of any software project. For all but the most trivial changes (typos, etc) test cases are expected. Tests are run in actual browsers using [Karma][karma].

- In all available and supported browsers: `npm test`
- In a specific browser: `npm run test:chrome`, `npm run test:firefox`, etc.
- While development server is running (`npm start`), navigate to [`http://localhost:9999/test/`][local]


[karma]: http://karma-runner.github.io/
[local]: http://localhost:9999/test/
[conventions]: https://github.com/videojs/generator-videojs-plugin/blob/master/docs/conventions.md
