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
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class BilderComponent implements OnInit {
  private astate:boolean = true;

  constructor() {}

  toggleState():void {
    this.astate = !this.astate;
  }
  ngOnInit() {
  }

}
