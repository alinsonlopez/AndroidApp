import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicine {
  id: number;
  nombre: string;
  url_imagen: string;
  marca: string;
  laboratorio: string;
  descripcion: string;
  sintomas_asociados: number[];
  sintomas_asociados_nombres: string[];
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