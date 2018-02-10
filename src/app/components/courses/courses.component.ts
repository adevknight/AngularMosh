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
    price: 1870000.35,
    releaseDate: new Date(2004, 0, 30),
    // tslint:disable-next-line:max-line-length
    text: 'Quis pariatur velit Lorem amet proident qui velit nisi aliqua labore Lorem ut. Minim amet ullamco et excepteur ea labore quis cupidatat aliquip.'
  };

  constructor() { }

  ngOnInit() {
  }

}
