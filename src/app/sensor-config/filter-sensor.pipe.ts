import { Pipe, PipeTransform  } from '@angular/core';
import { Sensor, SensorService } from '../core/sensors.service';

@Pipe({
  name: 'filterSensor'
})

export class FilterSensor implements PipeTransform {

  transform(sensors: Sensor[], t:string) {    
    if (t === undefined) {
      return sensors.filter(sensor => sensor);
    } else {
      return sensors.filter(sensor => sensor.type === t);
    }
  }
}
