/*
 * Angular
 */
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

/*
 * Components
 */
import { YouTubeSearchComponent } from './components/YouTubeSearchComponent';

/*
 * Injectables
 */
import { serviceInjectables } from './services/services';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'http-app',
  directives: [
    YouTubeSearchComponent
  ],
  template: `
  <div class="container">
    <simple-http></simple-http>
    <hr/>
    <more-http></more-http>
    <hr/>
    <youtube-search></youtube-search>
  </div>
  `
})
class HttpApp {
}

bootstrap(HttpApp, [
  HTTP_PROVIDERS,
  serviceInjectables
]);
