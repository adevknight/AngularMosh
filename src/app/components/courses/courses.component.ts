import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {
  title = 'This is the TITLE LOREM IPSUM DOLOR';
  x = true;
  isGreen = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(x) {
    console.log(x);
  }

}
