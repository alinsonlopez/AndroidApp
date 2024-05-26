import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MedicinesService } from '../services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonicModule, RouterLink]
})
export class MedicinesPage implements OnInit {
  medicines: any[] = [];

  constructor(private medicinesService: MedicinesService) { }

  ngOnInit() {
    this.medicinesService.getMedicines().subscribe(data => {
      this.medicines = data.medicines;
    });


  }
}
