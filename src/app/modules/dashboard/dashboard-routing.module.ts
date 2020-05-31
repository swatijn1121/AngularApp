import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FakeServiceDataComponent } from './fake-service-data/fake-service-data.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'fakeServiceData', component: FakeServiceDataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
