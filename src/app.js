import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Master Tools';
    config.map([
      {
        route: [''], name: 'tools', moduleId: PLATFORM.moduleName('./tools'), nav: true, title: 'Welcome'
      }
    ]);

    this.router = router;
  }
}
