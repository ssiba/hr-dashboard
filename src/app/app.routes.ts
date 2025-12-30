import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { authRedirectGuard } from './guards/auth-redirect.guard';
import { UserRegistraionComponent } from './signup/user-registraion/user-registraion.component';

export const routes: Routes = [

 // login
 { path: 'login', component: UserLoginComponent },

 //signup
 { path: 'signup', component: UserRegistraionComponent },

 // AUTO REDIRECT AFTER LOGIN
 { path: '', canActivate: [authRedirectGuard], component: UserLoginComponent },

 // DASHBOARD LAYOUT
 {
   path: '',
   component: LayoutComponent,
   children: [
     {
       path: 'admin-dashboard',
       component: AdminDashboardComponent,
       canActivate: [adminGuard]
     },
     {
       path: 'user-dashboard',
       component: UserDashboardComponent
     }
   ]
 },

 // FALLBACK
 { path: '**', redirectTo: '' }
];
