import { AppError } from './../common/errors/app-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { Observable } from 'rxjs/Observable';
import { BadInputError } from './../common/errors/bad-input-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  create(x) {
    return this.http.post(this.url, JSON.stringify(x))
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  update(x) {
    return this.http.put(this.url + '/' + x.id, JSON.stringify(x))
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  delete(x) {
    return this.http.delete(this.url + '/willCreateError/' + x.id)
      .timeout(5000)
      .map(response => response.json())
      .retry(3)
      .catch(this.handleErrors);
  }

  private handleErrors(err: Response) {
    if (err.status === 400) {
      return Observable.throw(new BadInputError(err.json()));
    }

    if (err.status === 404) {
      return Observable.throw(new NotFoundError(err.json()));
    }

    return Observable.throw(new AppError(err.json()));
  }
}
