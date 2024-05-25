import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', loadComponent: ()=> import('./principal/principal.page').then(m=>m.MainPage)  },
  {
    path: 'medicines',
    loadComponent: () => import('./medicines/medicines.page').then( m => m.MedicinesPage)
  },
  {
    path: 'symptoms',
    loadComponent: () => import('./symptoms/symptoms.page').then( m => m.SymptomsPage)
  }
];
