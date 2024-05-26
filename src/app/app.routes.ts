import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: 'medicines', pathMatch: 'full' },

  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then(m => m.MainPage)
  },
  {
    path: 'medicines',
    loadComponent: () => import('./medicines/medicines.page').then(m => m.MedicinesPage)
  },
  {
    path: 'symptoms',
    loadComponent: () => import('./symptoms/symptoms.page').then(m => m.SymptomsPage)
  }
];
