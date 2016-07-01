import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  QueryList,
  ViewChildren,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';
import {BilderComponent} from './bilder.component';

@Component({
  moduleId: module.id,
  selector: 'bilder-liste',
  directives: [BilderComponent],
  templateUrl: 'bilder-liste.component.html',
  styleUrls: ['bilder-liste.component.css']
})
export class BilderListeComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  @ViewChildren(BilderComponent) children:QueryList<BilderComponent>;
  // mit bind versorgte ScrollListenerFunction
  private fn:any;

  constructor(private win:Window, private element:ElementRef) {
  }

  processCheck():void {
    /**
     let window_height = this.win.height();
     let window_top_position = this.win.scrollTop();
     let window_bottom_position = (window_top_position + window_height);
     **/
  }

  // wird mit bind mit dem this der Klasse versorgt, so dass im ScrollListener auf die Daten zugegriffen werden kann.
  scrollFunction(e):void {

    let window_width = 0;
    let window_height = 0;
    let window_top_position = 0;
    let window = this.win;

    if (typeof pageYOffset != 'undefined') {
      //most browsers except IE before #9
      window_top_position = pageYOffset;
    } else {
      var B = document.body; //IE 'quirks'
      var D = document.documentElement; //IE with doctype
      D = (D.clientHeight) ? D : B;
      window_top_position = D.scrollTop;
    }

    if (typeof( window.innerWidth ) == 'number') {
      //Non-IE
      window_width = window.innerWidth;
      window_height = window.innerHeight;
    } else if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )) {
      //IE 6+ in 'standards compliant mode'
      window_width = document.documentElement.clientWidth;
      window_height = document.documentElement.clientHeight;
    } else if (document.body && ( document.body.clientWidth || document.body.clientHeight )) {
      //IE 4 compatible
      window_width = document.body.clientWidth;
      window_height = document.body.clientHeight;
    }

    let window_bottom_position = (window_top_position + window_height);

    console.info("scroll", window_top_position, window_bottom_position, window_width, window_height);
    /**
    this.children.forEach((item) => {
      console.log(item.getBounds());
    })
     **/

    console.log(this.children.first.getBounds());
  }

  ngOnInit() {
    this.fn = this.scrollFunction.bind(this);
    this.win.addEventListener('scroll', this.fn);
  }

  ngOnDestroy() {
    this.win.removeEventListener('scroll', this.fn);
  }

  ngAfterViewInit() {
    this.children.forEach((item) => {
      item.toggleState();
    })
  }

  ngAfterViewChecked() {
    if (this.children) {
      this.children.first.toggleState();
    }
  }

}
