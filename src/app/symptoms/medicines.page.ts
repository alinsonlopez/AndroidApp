import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicinesService, Medicine } from 'src/app/services/medicines.service';
import { SymptomService, Symptom } from 'src/app/services/symptoms.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicinesPage implements OnInit {
  medicines: Medicine[] = [];
  symptoms: Symptom[] = [];
  chunkedMedications: Medicine[][] = [];
  currentChunk = 0;  

  constructor(
    private medicineService: MedicinesService,
    private symptomService: SymptomService
  ) {}

  ngOnInit() {
    this.medicineService.getMedicines().subscribe((medicines) => {
      this.medicines = medicines;
      this.symptomService.getSymptoms().subscribe((symptoms) => {
        this.symptoms = symptoms;
        this.mapSymptomsToMedicines();
        this.chunkMedications();
      });
    });
  }

  mapSymptomsToMedicines() {
    const symptomMap = new Map(this.symptoms.map((symptom) => [symptom.id, symptom.nombre]));

    this.medicines.forEach((medicine) => {
      medicine.sintomas_asociados_nombres = medicine.sintomas_asociados
        .map((symptomId) => symptomMap.get(symptomId))
        .filter((symptomName): symptomName is string => symptomName !== undefined);
    });
  }

  chunkMedications() {
    this.chunkedMedications = [];
    for (let i = 0; i < this.medicines.length; i += 2) {
      this.chunkedMedications.push(this.medicines.slice(i, i + 2));
    }
  }

  prev() {
    if (this.currentChunk > 0) {
      this.currentChunk--;
    }
  }

  next() {
    if (this.currentChunk < this.chunkedMedications.length - 1) {
      this.currentChunk++;
    }
  }
}
