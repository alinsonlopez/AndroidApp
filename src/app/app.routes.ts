import { Routes } from '@angular/router';

export const routes: Routes = [
<<<<<<< HEAD
  // { path: '', redirectTo: 'medicines', pathMatch: 'full' },

  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then(m => m.MainPage)
  },
=======

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', 
  loadComponent: ()=> import('./home/home.page').then(m=>m.HomePage)  },
>>>>>>> 1bbdc6b
  {
    path: 'medicines',
    loadComponent: () => import('./medicines/medicines.page').then(m => m.MedicinesPage)
  },
  {
    path: 'symptoms',
    loadComponent: () => import('./symptoms/symptoms.page').then(m => m.SymptomsPage)
  }
];
