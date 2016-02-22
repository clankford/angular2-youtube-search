import { bootstrap } from 'angular2/platform/browser'
import { serviceInjectables } from './services/services';
import { HTTP_PROVIDERS } from 'angular2/http'
import { App } from './app';

bootstrap(App, [ HTTP_PROVIDERS, serviceInjectables])
