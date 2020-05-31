import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { FakeServiceDataComponent } from './fake-service-data/fake-service-data.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, AboutComponent, FakeServiceDataComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
