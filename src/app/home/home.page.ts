import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../../assets/css/general.scss'],
  standalone: true,
  imports: [ RouterLink, IonicModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
