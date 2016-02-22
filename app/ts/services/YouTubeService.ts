import { Injectable, bind } from 'angular2/core'

@Injectable()
export class YouTubeService {
  constructor() {
  }
}

export var youTubeServiceInjectables: Array<any> = [
  bind(YouTubeService).toClass(YouTubeService)
];
