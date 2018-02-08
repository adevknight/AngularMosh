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
    // If the currentRoute were changed without re-creating/re-init the GithubProfileComponent,
    // then the username will not be changed since this method is not using an Observable method.
    this.username = this.currentRoute.snapshot.paramMap.get('username');
    console.log(this.username);
  }

}
