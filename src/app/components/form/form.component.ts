import { Component, OnInit, ViewChild } from '@angular/core';

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

  // 'myForm' is Template Reference Variable in 'form.component.html'
  @ViewChild('myForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data.value);
  }

  onReset() {
    this.form.reset();
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
