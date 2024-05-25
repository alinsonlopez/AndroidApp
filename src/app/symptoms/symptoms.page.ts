import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule]
})
export class SymptomsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
