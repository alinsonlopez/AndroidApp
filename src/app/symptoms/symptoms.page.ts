import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SymptomService, Symptom } from 'src/app/services/symptoms.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SymptomsPage implements OnInit {
  symptoms: Symptom[] = [];
  chunkedSymptoms: Symptom[][] = [];
  currentChunk = 0;

  constructor(
    private symptomService: SymptomService
  ) {}

  ngOnInit() {
    this.symptomService.getSymptoms().subscribe((symptoms) => {
      this.symptoms = symptoms;
      this.chunkSymptoms();
    });
  }

  chunkSymptoms() {
    this.chunkedSymptoms = [];
    for (let i = 0; i < this.symptoms.length; i += 2) {
      this.chunkedSymptoms.push(this.symptoms.slice(i, i + 2));
    }
  }

  prev() {
    if (this.currentChunk > 0) {
      this.currentChunk--;
    }
  }

  next() {
    if (this.currentChunk < this.chunkedSymptoms.length - 1) {
      this.currentChunk++;
    }
  }
}
