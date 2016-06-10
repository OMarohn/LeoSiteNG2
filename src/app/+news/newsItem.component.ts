import {Component, Input } from '@angular/core';
import {NewsItem} from './newsItem';

@Component({
  moduleId: module.id,
  selector: 'news-item',
  templateUrl: 'newsItem.component.html'
})
export class NewsItemComponent {
    @Input() item: NewsItem;
    @Input() picPath: string;
}
