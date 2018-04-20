import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';


const AUTH_ROUTES: Routes = [
    { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent }
]

export const authRouting = RouterModule.forRoot(AUTH_ROUTES);  