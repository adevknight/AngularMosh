import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {
  title = 'This is the TITLE LOREM IPSUM DOLOR';
  imgUrlA = 'http://placehold.it/600/92c952';
  imgUrlB = 'http://placehold.it/600/771796';

  constructor() { }

  ngOnInit() {
  }

}
