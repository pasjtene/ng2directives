import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloAngular2 } from './hello-angular2/hello-angular2.component';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { AppRoutingModule } from './app-routing.module';
import { SensorConfigModule } from './sensor-config/sensor-config.module';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorFilterComponent } from './sensor-filter/sensor-filter.component';
import { ConfigModalComponent } from './config-modal/config-modal.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { HumiditySensorComponent } from './d3/humidity.component';
import { DonutChartDirective } from './d3/donut-chart.directive';
import { D3Service } from 'd3-ng2-service';


@NgModule({
  declarations: [
    AppComponent,
    HelloAngular2,
    HomeComponent,
    WidgetComponent,
    TabsComponent,
    TabComponent,
    HumiditySensorComponent,
    DonutChartDirective

    //ConfigModalComponent,
    //SensorFilterComponent,
    //SensorListComponent,
    //SensorConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SensorConfigModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
