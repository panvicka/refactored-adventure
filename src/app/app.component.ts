import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-test';
  isChecked = true;


  onChange($event) {
    console.log(event);
    console.log($event);
    console.log("Test checker 3 checked");
  }
}
