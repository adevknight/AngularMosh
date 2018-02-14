import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('Type Your First Name', Validators.required),
        lastName: new FormControl('Type Your Last Name', Validators.required)
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl('', Validators.required)
    });
  }

}
