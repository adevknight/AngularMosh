import { BadInputError } from './../common/errors/bad-input-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = 'https://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(x) {
    return this.http.post(this.url, JSON.stringify(x)).catch((err: Response) => {
      if (err.status === 400) {
        return Observable.throw(new BadInputError(err.json()));
      } else {
        return Observable.throw(new AppError(err.json()));
      }
    });
  }

  updatePost(x) {
    return this.http.put(this.url + '/' + x.id, JSON.stringify(x));
  }

  deletePost(x) {
    return this.http.delete(this.url + '/' + x.id).catch((err: Response) => {
      if (err.status === 404) {
        return Observable.throw(new NotFoundError(err.json()));
      } else {
        return Observable.throw(new AppError(err.json()));
      }
    });
  }
}
