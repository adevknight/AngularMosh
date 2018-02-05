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
    this.postService.getAll().subscribe(res => {
      this.posts = res;
    });
  }

  createPost(title: HTMLInputElement) {
    const sendedData: any = {
      title: title.value
    };

    this.posts.splice(0, 0, sendedData);

    title.value = '';

    this.postService.create(sendedData).subscribe(res => {
      sendedData.id = res.id;
      console.log(sendedData);

      console.log('POST: ' + sendedData.title.toString() + ' is SUCCESSFUL');
      console.log(res);
    }, (err: AppError) => {
      this.posts.splice(0, 1);

      if (err instanceof BadInputError) {
        console.log('This is a BadInputError');
        console.log(err);
      } else {
        throw err;
      }
    });
  }

  updatePost(post) {
    this.postService.update(post).subscribe(res => {
      console.log(res);
    });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post).subscribe(() => {
      console.log('DELETE: ' + post.title + ' is SUCCESSFUL');
      console.log(post);
    }, (err: AppError) => {
      this.posts.splice(index, 0, post);

      if (err instanceof NotFoundError) {
        console.log('This is NotFoundError');
        console.log(err);
      } else {
        throw err;
      }
    });
  }
}
