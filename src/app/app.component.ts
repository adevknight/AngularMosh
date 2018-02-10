import { OptEventArguments } from './components/favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'This is Title Lorem Ipsum',
    isFavorite : true
  };
  onClick(x) {
    this.post.isFavorite = !this.post.isFavorite;
  }
  something(x: OptEventArguments) {
    console.log('optEventAlias is HAPPENING: ' + x.someData);
    this.post.isFavorite = !this.post.isFavorite;
  }
}
