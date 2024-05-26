import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss', '../assets/css/general.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HttpClientModule],
})
export class AppComponent {
  constructor() {}
}