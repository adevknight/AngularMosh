import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  searchField: FormControl;
  searchHistory: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .debounceTime(400)
    .subscribe(term => {
      console.log(term);
    });
  }

}
