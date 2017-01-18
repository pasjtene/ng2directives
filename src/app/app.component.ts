import { Component } from '@angular/core';
import { HelloAngular2 } from './hello-angular2/hello-angular2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  e = '';
  title = 'app works!';
  didGreet(event) {
    console.log(event);
    this.e = event;
  }
}
