import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { Sensor } from '../core/sensors.service';
@Component({
  selector: 'config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.css']
})

export class ConfigModalComponent implements OnInit {
  private isOpen: boolean = false;
  private nextFn: Function;

  constructor() { }

  ngOnInit() {
  }

  open(callback: Function) {
    this.nextFn = callback;
    this.isOpen = true;
  }

  ok(callback) {
    this.nextFn();
    this.isOpen = false;
  }

  cancel() {
    this.isOpen = false;
  }
}
