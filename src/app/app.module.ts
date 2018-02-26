import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import * as Raven from 'raven-js';

import { GlobalErrorService } from './global-error.service';


Raven
  .config('https://f558221fef684c1b96a4f1a5d3060cbd@sentry.io/293028', {
    release: 'abc',
    environment: 'production'
  })
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err);
  }
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: RavenErrorHandler },
    { provide: ErrorHandler, useClass:  GlobalErrorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
