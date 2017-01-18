import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { HelloAngular2 } from './hello-angular2/hello-angular2.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component:AppComponent

  },

  {
    path: 'hello',
    component:HelloAngular2
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
