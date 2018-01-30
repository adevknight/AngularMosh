import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      console.log(res.json());
    });
  }

  ngOnInit() {
  }

}
