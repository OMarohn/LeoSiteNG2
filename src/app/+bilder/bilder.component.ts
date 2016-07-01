import {Component, ElementRef, Input, trigger, state, style, transition, animate} from '@angular/core';
import * as moment from 'moment';


@Component({
  moduleId: module.id,
  selector: 'bilder',
  templateUrl: 'bilder.component.html',
  styleUrls: ['bilder.component.css'],
  animations: [
    trigger('animState', [
      state('inactive', style({
        opacity: 0.01,
        backgroundColor: '#eee',
      })),
      state('active', style({
        opacity: 1,
        backgroundColor: '#cfd8dc',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class BilderComponent {
  @Input() imageUrl:string;
  private astate:string = "inactive";

  constructor(private element:ElementRef) {

  }

  getBounds():any {
    let el = this.element.nativeElement.children[0];
    console.log(el);
    return {height:el.clientHeight, width:el.clientWidth, offsX:el.offsetLeft, offsY:el.offsetTop}
  }

  toggleState():void {
    if (this.astate == "active") {
      this.astate = "inactive";
    } else {
      this.astate = "active";
    }
  }

  getState():string {
    return this.astate;
  }
}
