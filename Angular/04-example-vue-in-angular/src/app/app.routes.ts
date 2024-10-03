import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Login page',
        component: LoginComponent
    },
    {
        path: 'register',
        title: 'Register page',
        component: RegisterComponent
    }
];
