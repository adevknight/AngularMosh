import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: []
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('iptPropAlias') iptProp: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('optEventAlias') optEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onWarning(x) {
    this.iptProp = !this.iptProp;
    this.optEvent.emit({ someData: 'Lorem ipsum' });
  }

}

export interface OptEventArguments {
  someData: string;
}
