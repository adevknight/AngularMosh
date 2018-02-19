import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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
    .distinctUntilChanged()
    .subscribe(term => {
      console.log(term);
    });
  }

}
