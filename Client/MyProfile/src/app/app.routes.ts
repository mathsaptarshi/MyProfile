import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",pathMatch:'full',redirectTo:"/profile"},
  {
    path:'profile',
    loadComponent: () => import('./components/profile/profile').then(m => m.Profile)
  }
];
