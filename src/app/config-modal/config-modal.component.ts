import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { Sensor } from '../core/sensors.service';
@Component({
  selector: 'config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.css']
})
export class ConfigModalComponent implements OnInit {
  private isOpen: boolean = false;

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
  }

  ok() {
    this.isOpen = false;
    this.onConfirm.emit(null);
  }

  cancel() {
    this.isOpen = false;
  }

}
