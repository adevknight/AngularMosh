import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

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
    Observable.combineLatest([
      this.currentRoute.paramMap,
      this.currentRoute.queryParamMap
    ]).subscribe(combined => {
      // combined[0] will always refer to streams of data obtained from paramMap Observable
      // combined[1] will always refer to streams of data obtained from queryParamMap Observable

      console.log('username: ' + combined[0].get('username'));

      this.page = +combined[1].get('page');
      console.log('page: ' + this.page);
      this.sortBy = combined[1].get('sortBy');
      console.log('sortBy: ' + this.sortBy);
    });
  }

}
