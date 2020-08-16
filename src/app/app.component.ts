import { Component } from '@angular/core';
import { Observable } from 'rxjs';

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-test';
  isChecked = true;
  progress = 0;
  progressAuto = 0;
  timer;
  demoData;


  constructor() {

    

    this.timer = setInterval(() => {
      this.progressAuto++;
      if (this.progressAuto == 100) clearInterval(this.timer);
    }, 20);

  }

  colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ]
  color = 3;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2020, 12, 12);

  categories = [
    { name: 'begginer', selected: false },
    { name: 'intermediate', selected: false },
    { name: 'advanced', selected: false }
  ]
  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  addProgress() {
    if (this.progress < 100) {
      this.progress++
    } else {
      this.progress = 0;
    }

  }

 


  onChange($event) {
    console.log(event);
    console.log($event);
    console.log("Test checker 3 checked");
  }
}
