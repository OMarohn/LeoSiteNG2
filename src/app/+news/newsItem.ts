export class NewsItem {
    headline:string;
    text:string;
    datum:string;
    bildURL:string;

    constructor(datum:string, headline:string, text: string,  bildURL:string) {
      this.text = text;
      this.headline = headline;
      this.bildURL = bildURL;
      this.datum = datum;
    }
}
