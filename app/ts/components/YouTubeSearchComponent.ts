import { Component } from 'angular2/core';
import { SearchBox } from './SearchBox';
import { SearchResultComponent } from './SearchResultComponent';
import { SearchResult } from '../models/SearchResult';

@Component({
  selector: 'youtube-search',
  directives: [SearchBox, SearchResultComponent],
  template: `
  `
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results);
  }
}
