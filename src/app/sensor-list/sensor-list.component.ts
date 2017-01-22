import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sensor, SensorService } from '../core/sensors.service';
import { OpenModalDirective } from '../config-modal/open-modal.directive';

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

/**
*Emit the sensor which is seleced in the template.
*The onAddItem event is cauth in sensor-config.component.html, with the sensor-list element
*When the event is caught, it called a function to add the new item in the list
*/
  add(sensor: Sensor) {
    this.onAddItem.emit(sensor);
  }

}
