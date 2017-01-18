import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Sensor {
  name: string,
  description: string,
  type: string
}

@Injectable()
export class SensorService {
  private dashboardSensors: Sensor[] = [];

  constructor(private http: Http) {
  }

  discoverSensors(): Observable<Sensor[]> {
    return this.http
        .get('/assets/data/newsensors.json')
        .map(res => res.json())
        .catch((err) => err);
  }

  addToDashboard(sensor:Sensor){
    this.dashboardSensors.push(sensor);
  }
}
