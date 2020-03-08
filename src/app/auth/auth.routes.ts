import { Routes } from '@angular/router';
import { LoginComponent } from '@app/auth/login/login.component'
import { SignupComponent } from '@app/auth/signup/signup.component'
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
    { 
        path: '', 
        component: AuthComponent, 
        children: [
            { path: 'login',    component: LoginComponent },
            { path: 'signup',   component: SignupComponent },
        ]
    }
];