import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { HelloAngular2 } from './hello-angular2/hello-angular2.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:AppComponent

  },
  {
    path: 'hello',
    component:HelloAngular2
  },
  {
    path: 'home',
    component:HomeComponent
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
