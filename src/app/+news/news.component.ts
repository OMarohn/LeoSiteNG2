import { Component, OnInit } from '@angular/core';
import {NewsItem} from './newsItem';
import {NewsItemComponent} from './newsItem.component';
import {NewsService} from "./news.service"; NewsService


@Component({
  moduleId: module.id,
  selector: 'news-feed',
  providers: [NewsService],
  directives: [NewsItemComponent],
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsFeedComponent implements OnInit {
  items: Array<NewsItem>=[];
  picPath = "/app/pic/news/";

  constructor(service:NewsService) {
    this.items = service.getNews('/app/+news/news.json');
  }

  ngOnInit() {
  }

}
