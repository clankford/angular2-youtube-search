import { Injectable, Inject, bind } from 'angular2/core';
import { Http } from 'angular2/http';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './services';

@Injectable()
export class YouTubeService {
  constructor(public http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }
}

export var youTubeServiceInjectables: Array<any> = [
  bind(YouTubeService).toClass(YouTubeService)
];
