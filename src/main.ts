import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RebelAppComponent, environment } from './app/';
import { provide } from '@angular/core';


if (environment.production) {
  enableProdMode();
}

//somewhat dirty but ...... it works's :-)
bootstrap(RebelAppComponent, [provide(Window, { useValue: window })]);

