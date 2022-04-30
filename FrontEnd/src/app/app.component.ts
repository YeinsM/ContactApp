import { Component } from '@angular/core';
import conctats from '../app/assets/json/initialState.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  constructor() { }
}
