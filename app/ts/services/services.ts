import { bind } from 'angular2/core';
import { youTubeServiceInjectables } from './YouTubeService';

export * from './YouTubeService';
export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export var serviceInjectables: Array<any> = [
  youTubeServiceInjectables,
  bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
  bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
]
