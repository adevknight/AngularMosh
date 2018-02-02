import { NotFoundError } from './../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(x) {
    return this.http.post(this.url, JSON.stringify(x));
  }

  updatePost(x) {
    return this.http.put(this.url + '/' + x.id, JSON.stringify(x));
  }

  deletePost(x) {
    return this.http.delete(this.url + '/' + x.id).catch((err: Response) => {
      if (err.status === 404) {
        return Observable.throw(new NotFoundError(err));
      } else {
        return Observable.throw(new AppError(err));
      }
    });
  }
}
