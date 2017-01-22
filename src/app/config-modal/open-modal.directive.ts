import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ConfigModalComponent } from './config-modal.component';
@Directive({
  selector: '[open-modal]'
})
export class OpenModalDirective {
  @Input('open-modal') modalInstance: ConfigModalComponent;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  clicked() {
    console.log(this);
    this.modalInstance.open(this.emitConfirm.bind(this));
  }

  emitConfirm() {
    this.onConfirm.emit(null);
  }

  constructor() { }
}
