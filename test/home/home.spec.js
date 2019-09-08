import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';
import { Home } from '../../src/home/home';
import { view } from 'aurelia-framework';

describe('the Home component', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('home/home'))
      .inView('<home></home>');
    await component.create(bootstrap);
  });

  it('should render correctly', () => {
    expect(document.body.outerHTML).toMatchSnapshot();
  });

  it('should render the correct header', () => {
    const travelHeader = document.querySelector('h3');
    expect(travelHeader.innerHTML).toBe('Travel Simulator');
  });

  it('contains a button with the right text', () => {
    const travelButton = document.querySelector('button');
    expect(travelButton.innerHTML).toBe('Generate Travel');
  });

  afterEach(() => {
    component.dispose();
  });
});

describe('the Home class', () => {
  let viewModel;
  beforeEach(() => {
    viewModel = new Home();
  });

  it('contains a service property', () => {
    expect(viewModel.service).toBeDefined();
  });

});
