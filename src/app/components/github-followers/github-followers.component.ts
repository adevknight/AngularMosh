import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    // If the currentRoute were changed without re-creating/re-init the GithubFollowersComponent,
    // then the page and sortBy will not be changed since this method is not using an Observable method.
    this.page = +this.currentRoute.snapshot.queryParamMap.get('page');
    this.sortBy = this.currentRoute.snapshot.queryParamMap.get('sortBy');
    console.log('Currently on: page: ' + this.page + ', sortBy: ' + this.sortBy);
  }

}
