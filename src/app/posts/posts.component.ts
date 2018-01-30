import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { 
    http.get(this.url).subscribe(res => {
      this.posts = res.json();
    });
  }

  ngOnInit() {
  }

  createPost(title: HTMLInputElement) {
    const sendedData = {
      title: title.value
    };
    this.http.post(this.url, JSON.stringify(sendedData)).subscribe(res => {
      console.log('POST: ' + sendedData.title.toString() + ' is SUCCESSFUL');
      console.log(res.json());
    });
  }
}
