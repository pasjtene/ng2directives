import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'humidity-sensor',
  template: `
  <tabs>
    <tab title="Temperature">
      <div class="sensor-text">{{temperature}}*C</div>
    </tab>
    <tab title="Humidity">
      <donut-chart [assets]="assetPercent" [locations]="locationPercent" [users]="userPercent" [total]="total"></donut-chart>
      <div class="jt-button-div">
        <button class="jt-button-blue" (click)="changeValues()">change</button>
      </div>
    </tab>
  </tabs>
  `,
  styles: [`
    .sensor-text {
      font-size: 90px;
      margin: 40px auto;
      width:100px
      text-align: center;
      height: 110px;
      vertical-align: middle;
      overflow: hidden;
      line-height: 1;
    }
    `  ]
})

export class HumiditySensorComponent implements OnInit {
  temperature: number = 21;
  assetPercent: number = 55;
  locationPercent: number = 30;
  userPercent: number = 15;
  total: number = this.assetPercent + this.locationPercent + this.userPercent;
  constructor() {}
  ngOnInit() {}
  changeValues() {
    this.assetPercent = Math.floor(Math.random() * 100);
    this.locationPercent = Math.floor(Math.random() * 100);
    this.userPercent = Math.floor(Math.random() * 100);
    this.total = this.assetPercent + this.locationPercent + this.userPercent;
  }
}
