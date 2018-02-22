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

  // firstName = 'Type Your First Name';

  model: MyFormModel = new MyFormModel();

  constructor() { }

  ngOnInit() {
  }

}

class MyFormModel {
  constructor(
    public firstName: string = 'Type Your First Name',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = ''
  ) {}
}