import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styles: []
})
export class GithubFollowersComponent implements OnInit {
  page: number;
  sortBy: string;
  users = [
    {
      name: 'John Snow',
      username: 'johnsnow'
    },
    {
      name: 'Robb Stark',
      username: 'robstark'
    },
    {
      name: 'Jamie Lannister',
      username: 'jamiel'
    },
    {
      name: 'Cersei Lannister',
      username: 'cerseil'
    },
    {
      name: 'Arya Stark',
      username: 'aryastark'
    },
    {
      name: 'Samwell Tarly',
      username: 'sam'
    }
  ];

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    // If you want to call somethingService whenever route's parameters or query parameters
    // are changed then use .switchMap instead of nesting .somethingService inside .subscribe.
    // Nesting .somethingService inside .subscribe will cause
    // the nesting of .subscribe (of .somethingService) inside .subscribe

    // Remember to use .switchMap() not .map()

    Observable.combineLatest([
      this.currentRoute.paramMap,
      this.currentRoute.queryParamMap
    ]).switchMap(combined => {
      // do whatever you wanted to do with value of route's parameters and query parameters.

      return this.somethingService.someMethod();
    }).subscribe(val => {
      // do whatever you wanted to do with val returned from .somethingService.someMethod().
    });

    /*
      Let say you have following statements
      obsA.switchMap(x => {
        return obsB;
      }).subscribe(y => {
        console.log(y);
      });

      It means that wheneven obsA emit new value, we emit obsB value from very beginning again.
      E.g:
      obsA is an Observable of <button> click events, and
      obsB is an Observable of incremental number values, i.e 1,2,3,4,5,6,so on

      If we implement .switchMap() like above the stream of data become something like:
      [Click],1,2,3,[Click],1,2,[Click],1,2,3,4,5,6,7,8,[Click],1,2,[Click],1,so on
    */
  }

}
