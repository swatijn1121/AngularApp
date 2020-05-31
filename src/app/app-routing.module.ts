import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthComponent } from './modules/auth/auth.component';
import { AdminModule } from './modules/admin/admin.module';
import { AdminComponent } from './modules/admin/admin.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'admin', component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule, AuthModule, AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
