import {SafeHtml} from "@angular/platform-browser/esm/src/security/dom_sanitization_service";
import {DomSanitizationService} from '@angular/platform-browser';

export class NewsItem {
    text:SafeHtml;
    datum:string;
    bildURL:string;

    constructor(datum:string, text: string,  bildURL:string) {
      this.text = text;
      this.bildURL = bildURL;
      this.datum = datum;
    }
}
