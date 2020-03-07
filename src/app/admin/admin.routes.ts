import { Routes } from '@angular/router';
import { IngressEgressComponent } from '@app/admin/ingress-egress/ingress-egress.component';
import { StatsComponent } from '@app/admin/stats/stats.component';
import { DetilsComponent } from '@app/admin/detils/detils.component';


export const adminRoutes: Routes = [
    { path: '',             component: StatsComponent },
    { path: 'movements',    component: IngressEgressComponent },
    { path: 'details',      component: DetilsComponent },
    { path: '*', redirectTo: '/admin', pathMatch: 'prefix' }
];