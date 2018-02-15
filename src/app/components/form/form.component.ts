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
  // name: FormGroup; // No Need to Declare
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() { }

  ngOnInit() {
    this.initFormControl();
    this.initFormGroup();
  }

  initFormControl() {
    this.firstName = new FormControl('Type Your First Name', Validators.required);
    this.lastName =  new FormControl('Type Your Last Name', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.language = new FormControl('', Validators.required);
  }

  initFormGroup() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Forms is Valid and Submitted');
    } else {
      console.log('Form is Invalid');
    }
  }
}
