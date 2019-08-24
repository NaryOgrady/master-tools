import { App } from 'app';

class RouterStub {
  constructor() {
    this.routes = null;
  }

  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let mockedApp;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    mockedApp = new App();
    mockedApp.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(mockedApp.router).toBeDefined();
  });

  it('has the correct title', () => {
    expect(mockedApp.router.title).toEqual('Master Tools');
  });
});
