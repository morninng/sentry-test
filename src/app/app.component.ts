import { Component, OnInit } from '@angular/core';
import * as Raven from 'raven-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit(){
    console.log('user set');
    Raven.setUserContext({
      email: 'matt@example.com',
      id: '123'
    });

    Raven.wrap({
      tags: {git_commit: 'c0deb10c4'}
    }, function () { /* ... */ });

    Raven.setTagsContext({ key: 'tag context value' });

    Raven.setExtraContext({ foo: 'bar' })

    Raven.context({
      extra: {planet: {name: 'Earth'}}
    }, function () { /* ... */ });

  }

  create_error() {
    console.log('create_error');
    throw new Error('create_error');
  }

  create_error_x() {
    console.log('create_error_x');
    throw new Error('create_error_x');
  }

  create_error_z() {
    console.log('create_error_z');
    throw new Error('create_error_z');
  }



  create_error_2() {
    try {
      const aaa = {bb: null};
      aaa.bb.cc = 3;

    } catch (e) {
        console.log('create_error_2');
        Raven.captureException(e)
    }
  }


  set_user(){
    console.log('set_user');
    Raven.setUserContext({
      email: 'maddddddtt@example.com',
      id: '123'
    });

  }

  captureMessage(){

    Raven.captureMessage('Something happened', {
      level: 'info' // one of 'info', 'warning', or 'error'
    });

  }

  captureException(){
    Raven.captureException(new Error('Oops!'), {
      logger: 'my.module'
    });
  }

  captureBreadcrumb(){

    Raven.captureBreadcrumb({
      message: 'Item added to shopping cart',
      category: 'action',
      data: {
         isbn: '978-1617290541',
         cartSize: '3'
      }
    });

  }



  feedback(){


    try {
        // handleRouteChange(...)?
      console.log('feedback');
      throw new Error('feedback');
    } catch (err) {
        Raven.captureException(err);
        Raven.showReportDialog();
    }


  }




}
