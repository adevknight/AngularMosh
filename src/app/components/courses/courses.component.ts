import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {
  course = {
    title: 'The Complete Angular Course - Mosh Hamedani',
    rating: 4.9745,
    students: 3245,
    price: 187.35,
    releaseDate: new Date(2004, 0, 30)
  };

  constructor() { }

  ngOnInit() {
  }

}
