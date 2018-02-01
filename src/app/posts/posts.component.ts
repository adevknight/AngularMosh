import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    // Putting Http.get() inside ngOnInit() is BEST PRACTICE
    this.postService.getPosts().subscribe(res => {
      this.posts = res.json();
    }, err => {
      console.log('There is Unexpected Error');
      console.log(err);
    });
  }

  createPost(title: HTMLInputElement) {
    const sendedData: any = {
      title: title.value
    };

    title.value = '';

    this.postService.createPost(sendedData).subscribe(res => {
      sendedData.id = res.json().id;
      console.log(sendedData);

      this.posts.splice(0, 0, sendedData);

      console.log('POST: ' + sendedData.title.toString() + ' is SUCCESSFUL');
      console.log(res.json());
    });
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(res => {
      console.log(res);
    });
  }

  deletePost(post) {
    this.postService.deletePost({ id: 345 }).subscribe(res => {
      this.posts.splice(this.posts.indexOf(post), 1);
    }, (err: Response) => {
      if (err.status === 404) {
        console.log('There is Expected Error');
        console.log(err);
      } else {
        console.log('There is Unexpected Error');
        console.log(err);
      }
    });
  }
}
