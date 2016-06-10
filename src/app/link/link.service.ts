/**
 * Created by Dörthe on 25.05.2016.
 */
import {ILinkDef, LinkDef} from './linkDef';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkService {
  private links:ILinkDef[];
  getLinks() {
    this.links = new Array();
    this.links.push(new LinkDef("http://www.coachmans.de/","Coachman's"));
    this.links.push(new LinkDef("http://www.gordon-setter-fieldtalks-guinness.de/","Fieldtalk's Guinness"));
    this.links.push(new LinkDef("http://www.pointer-und-setter.de/","Verein Pointer und Setter"));
    this.links.push(new LinkDef("http://www.gordon-setter.de/","Gordon Setter Club e.V."));
    this.links.push(new LinkDef("http://www.vdh.de/","Verband für das deutsches Hundewesen"));
    this.links.push(new LinkDef("http://www.jgv-stade.de/","Jagdgebrauchshund Verband Stade"));
    this.links.push(new LinkDef("http://whispering-hunters-setter.de/","Whispering Hunters"));
    this.links.push(new LinkDef("http://vonmentelande.de/","von Mentelande"));
    this.links.push(new LinkDef("http://www.von-wersabe.de/","Gordon Setter von Wersabe"));
    this.links.push(new LinkDef("http://www.vomschwarzenmoor.de/zwinger.htm","Zwinger vom Schwarzen Moor"));
    this.links.push(new LinkDef("http://www.setterzucht-jamainas.de/","Gordon Setter Zucht  '' Jamainas ''"));
    return this.links;
  }
}
