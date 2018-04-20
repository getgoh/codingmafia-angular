import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
]

export const appRouting = RouterModule.forRoot(APP_ROUTES);  