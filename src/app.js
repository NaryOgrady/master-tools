import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Master Tools';
    config.map([
      {
        route: [''], name: 'home', moduleId: PLATFORM.moduleName('./home/home'), nav: true, title: 'Welcome'
      }
    ]);

    this.router = router;
  }
}
