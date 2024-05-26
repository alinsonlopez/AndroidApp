import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Symptom {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  private httpClient = inject(HttpClient);

  private symptomUrl = '../assets/data/symptoms.json'; 

  constructor() { }

 // Método para obtener los sintomas
 getSymptoms(): Observable<Symptom[]> {
  return this.httpClient.get<Symptom[]>(this.symptomUrl);
}
}