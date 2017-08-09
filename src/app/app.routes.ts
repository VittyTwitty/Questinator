import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./core/auth-guard.service";

export const ROUTES: Routes = [
  { 
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
   },
  { 
    path: 'home',  
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // { path: '**',    component: NoContentComponent },
];
