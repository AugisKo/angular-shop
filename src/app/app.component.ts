import { Component } from '@angular/core';
import { Preke } from './models/preke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public preke: Preke;

  public constructor() {
    this.preke = new Preke('Kostiumas', 100, 'prod001.jpg', true);
  }
  title = 'angular-shop';
}
