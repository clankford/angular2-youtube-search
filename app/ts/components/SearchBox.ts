import { Component, OnInit, EventEmitter, ElementRef } from 'angular2/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/SearchResult';
import { YouTubeService } from '../services/YouTubeService';

@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBox implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public youtube: YouTubeService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // only emit certain strings
      .debounceTime(250)
      .do(() => this.loading.next(true)) // enable loading
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe(
        (results: SearchResult[]) => { // on success
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );
  }
}
