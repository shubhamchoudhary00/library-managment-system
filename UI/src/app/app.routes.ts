import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegsiterComponent } from './auth/regsiter/regsiter.component';

export const routes: Routes = [
    {path:"**", component:PageNotFoundComponent },
    {path:"register",component:RegsiterComponent}
];
