import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styles: []
})
export class GithubProfileComponent implements OnInit {
  username: string;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.paramMap.subscribe(x => {
      this.username = x.get('username');
      console.log(x.get('username'));
    });
  }

}
