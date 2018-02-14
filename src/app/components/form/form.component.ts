import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
    'Russian',
    'Spanish'
  ];

  constructor() { }

  ngOnInit() {
  }

}
