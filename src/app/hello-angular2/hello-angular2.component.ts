import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-angular',
  templateUrl: './hello.component.html'

})

export class HelloAngular2 {
  @Input() who: number;
  @Output() onSayHello: EventEmitter<string> = new EventEmitter();

  sayHello() {
    this.onSayHello.emit(`Hello , ${this.who}`);
  }
}
