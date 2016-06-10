import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RebelAppComponent } from '../app/rebel-app.component';

beforeEachProviders(() => [RebelAppComponent]);

describe('App: RebelApp', () => {
  it('should create the app',
      inject([RebelAppComponent], (app: RebelAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rebel-app works!\'',
      inject([RebelAppComponent], (app: RebelAppComponent) => {
    expect(app.title).toEqual('rebel-app works!');
  }));
});
