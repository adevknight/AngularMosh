import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    .has-success {
        border: 2px solid green;
    }
    .has-danger {
        border: 2px solid red;
    }
  `]
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

  onSubmit(data) {
    console.log(data.value);
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