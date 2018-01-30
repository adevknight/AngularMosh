import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.posts = res.json();
    });
  }

  ngOnInit() {
  }

}
