/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BilderListeComponent } from './bilder-liste.component';

describe('Component: BilderListe', () => {
  it('should create an instance', () => {
    let component = new BilderListeComponent();
    expect(component).toBeTruthy();
  });
});
