import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', 
  loadComponent: ()=> import('./home/home.page').then(m=>m.HomePage)  },
  {
    path: 'medicines',
    loadComponent: () => import('./medicines/medicines.page').then( m => m.MedicinesPage)
  },
  {
    path: 'symptoms',
    loadComponent: () => import('./symptoms/symptoms.page').then( m => m.SymptomsPage)
  }
];
