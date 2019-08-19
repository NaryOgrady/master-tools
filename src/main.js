import 'babel-polyfill';
import 'materialize-css/dist/css/materialize.css';
import * as Bluebird from 'bluebird';
import { PLATFORM } from 'aurelia-pal';

Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature(PLATFORM.moduleName('resources/index'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
