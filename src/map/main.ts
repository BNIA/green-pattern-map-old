import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {AppComponent} from './components/app/app.component';
import {enableProdMode} from '@angular/core';
enableProdMode();

bootstrap(AppComponent,[HTTP_PROVIDERS]);
