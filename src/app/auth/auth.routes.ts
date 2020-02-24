import { Routes } from '@angular/router';
import { LoginComponent } from '@app/auth/login/login.component'
import { SignupComponent } from '@app/auth/signup/signup.component'

export const authRoutes: Routes = [
    { path: 'login',    component: LoginComponent },
    { path: 'signup',   component: SignupComponent },
];