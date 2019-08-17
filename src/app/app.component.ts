import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHashtagSelected: Boolean = true;
  isUserSelected: Boolean = false; 

  constructor(public router: Router) { }

  hastagSearchSelected() {
    this.isUserSelected = false;
    this.isHashtagSelected = true;
    this.router.navigate(['hashtag-search']);

  }

  userSearchSelected() {
    this.isHashtagSelected = false;
    this.isUserSelected = true;
    this.router.navigate(['user-search']);
  }
}
