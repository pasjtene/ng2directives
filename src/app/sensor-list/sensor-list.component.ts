import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sensor, SensorService } from '../core/sensors.service';

@Component({
  selector: 'sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  @Input() sensorsj: Sensor[];
  @Output() onAddItem: EventEmitter<Sensor> = new EventEmitter<Sensor>()
  constructor() { }

  ngOnInit() {
  }

  add(sensor: Sensor) {
    this.onAddItem.emit(sensor);
  }

}
