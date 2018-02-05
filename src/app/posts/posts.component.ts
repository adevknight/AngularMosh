import { BadInputError } from './../common/errors/bad-input-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
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
    }, (err: AppError) => {
      if (err instanceof BadInputError) {
        console.log('This is a BadInputError');
        console.log(err);
      } else {
        throw err;
      }
    });
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(res => {
      console.log(res);
    });
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(res => {
      this.posts.splice(this.posts.indexOf(post), 1);
    }, (err: AppError) => {
      if (err instanceof NotFoundError) {
        console.log('This is NotFoundError');
        console.log(err);
      } else {
        throw err;
      }
    });
  }
}
