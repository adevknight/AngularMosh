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
    this.currentRoute.queryParamMap.subscribe(x => {
      this.page = +x.get('page');
      this.sortBy = x.get('sortBy');
      console.log('Currently on: page: ' + this.page + ', sortBy: ' + this.sortBy);
    });
  }

}
