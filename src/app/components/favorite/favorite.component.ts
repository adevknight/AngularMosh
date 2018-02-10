import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: []
})
export class FavoriteComponent implements OnInit {
  @Input() iptProp: boolean;

  constructor() { }

  ngOnInit() {
  }

}
