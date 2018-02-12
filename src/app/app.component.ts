import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2, 3, 4, 5];
  isCoursesAvail() {
    if (this.courses.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
