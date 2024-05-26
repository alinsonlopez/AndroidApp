import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicinesService, Medicine } from 'src/app/services/medicines.service';
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
  chunkedMedications: Medicine[][] = [];
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'slide'

  };

  constructor(private medicineService: MedicinesService) { }

  ngOnInit() {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
      this.chunkMedications();
    });
  }

  chunkMedications() {
    this.chunkedMedications = [];
    for (let i = 0; i < this.medicines.length; i += 2) {
      this.chunkedMedications.push(this.medicines.slice(i, i + 2));
    }
  }
}
