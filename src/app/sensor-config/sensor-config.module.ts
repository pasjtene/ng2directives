import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorConfigComponent } from './sensor-config.component';
import { SensorConfigRoutingModule } from './sensor-config-routing.module';
import { SensorService } from '../core/sensors.service';
import { FilterSensor } from './filter-sensor.pipe';
import { SensorListComponent } from '../sensor-list/sensor-list.component';
import { SensorFilterComponent } from '../sensor-filter/sensor-filter.component';
import { ConfigModalComponent } from '../config-modal/config-modal.component';
import { FormsModule } from '@angular/forms';
import { OpenModalDirective } from '../config-modal/open-modal.directive';

@NgModule ({
  imports: [
    CommonModule,
    SensorConfigRoutingModule,
    FormsModule
  ],

  declarations: [
    SensorConfigComponent,
    FilterSensor,
    SensorListComponent,
    SensorFilterComponent,
    ConfigModalComponent,
    OpenModalDirective
  ],

  providers: [SensorService]
})

export class SensorConfigModule {}
