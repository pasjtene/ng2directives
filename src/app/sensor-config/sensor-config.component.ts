import { Component, OnInit } from '@angular/core';
import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from '../sensor-list/sensor-list.component';
import { SensorFilterComponent } from '../sensor-filter/sensor-filter.component';
import { ConfigModalComponent } from '../config-modal/config-modal.component';


@Component({
  selector: 'configure',
  templateUrl: './sensor-config.component.html',
  styleUrls: ['./sensor-config.component.css'],
  //pipes: [FilterSensor ]
})
export class SensorConfigComponent implements OnInit {
  private sensors: Sensor[];
  private sensorModel: Sensor = {
    name:'',
    description:'',
    type:''
   };
  private dashboardSensors: Sensor[] = [];
  constructor(private sensorService: SensorService) { }

  refreshSensors() {
    this.sensorService.discoverSensors()
        .subscribe(data => {
          console.log("Data..2", data);
          this.sensors = data;
        })
  }
  ngOnInit() {
  }

  addToDashboard(sensor: Sensor) {
    this.dashboardSensors.push(sensor);
  }

  selectSensor(sensor:Sensor, modal:ConfigModalComponent ) {
    this.sensorModel = sensor;
    modal.open();
  }

}
