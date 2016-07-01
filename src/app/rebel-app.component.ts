import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NavComponent } from './nav';
import { NewsFeedComponent } from './+news';
import { BilderListeComponent } from './+bilder';

@Component({
  moduleId: module.id,
  selector: 'rebel-app',
  templateUrl: 'rebel-app.component.html',
  styleUrls: ['rebel-app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@Routes([
  {path: '/news', component: NewsFeedComponent},
  {path: '/bilder', component: BilderListeComponent}
])
export class RebelAppComponent {
  title = 'rebel-app works!';
}
