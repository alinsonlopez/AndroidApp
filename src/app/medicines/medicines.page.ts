import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Añadido para cambiar la encapsulación
  imports: [RouterLink, IonicModule]
})
export class MedicinesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
