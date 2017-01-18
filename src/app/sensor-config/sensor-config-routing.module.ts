import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SensorConfigComponent } from './sensor-config.component';

@NgModule ({
  imports: [
    RouterModule.forChild ([
        {
          path: 'sensor',
          component: SensorConfigComponent
        }
    ])
  ],
  exports: [
    RouterModule
  ]

})

export class SensorConfigRoutingModule {}
