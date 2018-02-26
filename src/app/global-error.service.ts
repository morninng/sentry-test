import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorService implements ErrorHandler {

  constructor() { }


  handleError(error) {
    console.log('GlobalErrorServicer handler', error);
  }




}
