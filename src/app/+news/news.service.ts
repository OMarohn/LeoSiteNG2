import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { NewsItem } from './newsItem';

@Injectable()
export class NewsService {
  private news: Array<NewsItem> = [];

  constructor(private http:Http) {

  }


  public getNews(url:string) {
    this.news = [];
    this.http.get(url)
      .map((res:Response) => res.json())
      .subscribe((daten:Array<NewsItem>) => {
        daten.map((datum:NewsItem) => {
          console.log(datum);
          this.news.push(datum);
        });
      });
    return this.news;
  }
}
