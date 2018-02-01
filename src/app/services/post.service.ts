import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'https://abcjsonplaceholder.typicode.com/posts';

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
    return this.http.delete(this.url + '/' + x.id);
  }
}
