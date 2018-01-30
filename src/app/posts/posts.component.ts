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
    const sendedData: any = {
      title: title.value
    };

    title.value = '';

    this.http.post(this.url, JSON.stringify(sendedData)).subscribe(res => {
      sendedData.id = res.json().id;
      console.log(sendedData);

      this.posts.splice(0, 0, sendedData);

      console.log('POST: ' + sendedData.title.toString() + ' is SUCCESSFUL');
      console.log(res.json());
    });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).subscribe(res => {
      console.log(res);
    });
  }
}
