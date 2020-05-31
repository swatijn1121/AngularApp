import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: IndexComponent,
      },
      {
        path: 'student', component: StudentComponent,
      },
      {
        path: 'profile', component: ProfileComponent,
      },
      {
        path: 'settings', component: SettingsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
