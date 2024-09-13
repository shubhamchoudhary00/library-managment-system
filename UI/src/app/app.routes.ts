import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegsiterComponent } from './auth/regsiter/regsiter.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path:"register",component:RegsiterComponent},
    {path:"login",component:LoginComponent},

    {path:"**", component:PageNotFoundComponent }

];
