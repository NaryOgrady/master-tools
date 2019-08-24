const { series, rimraf, crossEnv } = require('npm-utils/src/index');

module.exports = {
  scripts: {
    test: {
      default: series(
        rimraf('test/coverage-jest'),
        crossEnv('BABEL_TARGET=node jest')
      )
    }
  }
};
