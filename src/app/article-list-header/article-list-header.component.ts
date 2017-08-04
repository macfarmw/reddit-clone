import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {

  private currentFilter: string = 'Time';
  
  public sortDirection: number = 1; //1=desc

  constructor(
    private articleService: ArticleService
  ) { }

  changeDirection() {
    this.sortDirection = this.sortDirection * -1;
    this._updateSort(); 
  }

  liveSearch(evt) {
    const val = evt.target.value;
    this.articleService.filterBy(val);
  }

  _updateSort() {
    this.articleService
      .sortBy(
        this.currentFilter,
        this.sortDirection
      );
  }

  changeSort(filter: string) {
    if(filter === this.currentFilter) {
      this.changeDirection();
    } else {
      this.currentFilter = filter;
      this._updateSort();
    }
  }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

}