import {   Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-bilder',
  templateUrl: 'bilder.component.html',
  styleUrls: ['bilder.component.css'],
  animations: [
    trigger('animState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(0.9)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.0)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class BilderComponent implements OnInit {
  private astate:string = "active";

  constructor() {}

  toggleState():void {
    if (this.astate=="active") {
      this.astate="inactive";
    } else {
      this.astate="active";
    }
    console.info(this.astate);
  }

  getState():string {
    return this.astate;
  }
  ngOnInit() {
  }

}
