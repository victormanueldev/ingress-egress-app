import { NgModule }             from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AuthGuard }            from './auth/auth.guard';


const routes: Routes = [
  { 
    path        : 'auth',
    loadChildren : () => import('@app/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path        : 'admin',
    loadChildren: () => import('@app/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path        : '**',
    redirectTo  : '/admin/stats',
    pathMatch   : 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
