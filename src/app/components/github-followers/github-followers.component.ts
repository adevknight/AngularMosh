import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styles: []
})
export class GithubFollowersComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
