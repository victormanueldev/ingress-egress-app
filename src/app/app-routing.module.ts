import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent }        from './auth/auth.component';
import { authRoutes }           from './auth/auth.routes';
import { AdminComponent }       from './admin/admin.component';
import { adminRoutes }          from './admin/admin.routes';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { 
    path:       'auth',
    component:  AuthComponent,
    children:   authRoutes
  },
  { 
    path              : 'admin',
    component         : AdminComponent,
    children          : adminRoutes,
    canActivate       : [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
