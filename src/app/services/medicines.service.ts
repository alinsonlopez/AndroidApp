import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicine {
  id: number;
  name: string;
  image_url: string;
  brand: string;
  laboratory: string;
  description: string;
  symptoms: number[];
}

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private httpClient = inject(HttpClient);

  private medicineUrl = '../assets/data/medicines.json'; 

  constructor() { }

 // Método para obtener los medicamentos
 getMedicines(): Observable<Medicine[]> {
  return this.httpClient.get<Medicine[]>(this.medicineUrl);
}
}