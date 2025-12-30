import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'admin',
            component: AdminDashboardComponent,
            canActivate: [adminGuard]
          },
          {
            path: 'user',
            component: UserDashboardComponent
          },
          { path: '', redirectTo: 'admin', pathMatch: 'full' }
        ]
      }
];
