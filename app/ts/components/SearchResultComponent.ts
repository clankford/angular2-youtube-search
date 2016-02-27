import { Component } from 'angular2/core';
import { SearchResult } from '../models/SearchResult';

@Component({
  selector: 'search-result',
  inputs: ['result'],
  template: `
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}">
        <div class="capation">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <p><a href="{{result.videoUrl}}" class="btn btn-default"
                role="button"</a></p>
        </div>
      </div>
    </div>
  `
})
export class SearchResultComponent {
  result: SearchResult;
}
