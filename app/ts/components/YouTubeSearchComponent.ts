import { Component } from 'angular2/core';
import { SearchBox } from './SearchBox';
import { SearchResultComponent } from './SearchResultComponent';

@Component({
  selector: 'youtube-search',
  directives: [SearchBox, SearchResultComponent],
  template: `
  `
})
export class YouTubeSearchComponent {
  
}
