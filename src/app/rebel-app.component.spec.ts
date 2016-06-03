import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RebelAppAppComponent } from '../app/rebel-app.component';

beforeEachProviders(() => [RebelAppAppComponent]);

describe('App: RebelApp', () => {
  it('should create the app',
      inject([RebelAppAppComponent], (app: RebelAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rebel-app works!\'',
      inject([RebelAppAppComponent], (app: RebelAppAppComponent) => {
    expect(app.title).toEqual('rebel-app works!');
  }));
});
