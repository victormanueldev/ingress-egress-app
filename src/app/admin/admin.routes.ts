import { Routes } from '@angular/router';
import { IngressEgressComponent } from '@app/admin/ingress-egress/ingress-egress.component';
import { StatsComponent } from '@app/admin/stats/stats.component';
import { DetailsComponent } from '@app/admin/details/details.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '@app/auth/auth.guard';


export const adminRoutes: Routes = [
    { 
        path: '',             
        component: AdminComponent,
        children: [ 
            { path: 'stats',             component: StatsComponent },
            { path: 'movements',    component: IngressEgressComponent },
            { path: 'details',      component: DetailsComponent },

        ],
        canActivate : [AuthGuard],
        canLoad     : [AuthGuard]
    },
    // { path: '*', redirectTo: '/admin/stats', pathMatch: 'prefix' }
];