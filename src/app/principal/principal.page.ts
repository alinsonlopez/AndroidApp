import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  imports: [ RouterLink, IonicModule]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
