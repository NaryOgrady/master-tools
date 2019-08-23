const { series, rimraf, crossEnv } = require('npm-utils');

module.exports = {
  scripts: {
    test: {
      default: series(
        // TODO: add babel config
        rimraf('test/coverage-jest'),
        crossEnv('BABEL_TARGET=node jest')
      )
    }
  }
};
