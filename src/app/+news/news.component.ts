import { Component, OnInit } from '@angular/core';
import {NewsItem} from './newsItem';
import {NewsItemComponent} from './newsItem.component';

@Component({
  moduleId: module.id,
  selector: 'news-feed',
  directives: [NewsItemComponent],
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsFeedComponent implements OnInit {
  items:NewsItem[];

  constructor() {
    this.items = new Array();
    this.items.push(new NewsItem("01.01.2016","Item 1",null));
    this.items.push(new NewsItem("02.02.2016","<b>Item 2</b>",null));
  }

  ngOnInit() {
  }

}
