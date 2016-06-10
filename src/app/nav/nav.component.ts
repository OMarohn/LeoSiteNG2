import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';
import {LinkService} from '../link/link.service';
import {ILinkDef} from '../link/linkDef';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers: [LinkService],
  selector: 'nav-bar',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
  private links : ILinkDef[];
  private rt : Router;
  private akRoute:String;

  // per DI wird der LinkService verfuegbar gemacht
  constructor(private ls : LinkService, private router : Router) {
    console.log(router);
    this.rt=router;
    this.rt.changes.subscribe((val) => {this.akRoute = this.rt.serializeUrl(this.rt.urlTree)});
    this.links = ls.getLinks();
  }

  isActiveRoute(r:String):boolean {
    return this.akRoute == r;
  }

  ngOnInit() {
  }

}
