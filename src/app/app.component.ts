import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-test';
  isChecked = true;
  colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ]
  color = 3;


  onChange($event) {
    console.log(event);
    console.log($event);
    console.log("Test checker 3 checked");
  }
}
