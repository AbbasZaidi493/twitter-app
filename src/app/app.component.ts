import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Main application component. This will be the first component that renders in the application.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHashtagSelected: Boolean = true;
  isUserSelected: Boolean = false; 

  constructor(public router: Router) { }

  /**
   * Highlight tabs on the basis of route on app refresh or restart
   * 
   * @method ngOnInit
   * 
   * @returns {void}
  */
  ngOnInit(): void {
    if(window.location.pathname === '/user-search') {
      this.isUserSelected = true;
      this.isHashtagSelected = false;
    } else {
      this.isUserSelected = false;
      this.isHashtagSelected = true;
    }
  }

  /**
   * Highlight hashtag tab and navigate to hashtag-search route
   * 
   * @method hashtagSearchSelected
   * 
   * @returns {void}
  */
  hashtagSearchSelected(): void {
    this.isUserSelected = false;
    this.isHashtagSelected = true;
    this.router.navigate(['hashtag-search']);
  }

  /**
   * Highlight user tab and navigate to user-search route
   * 
   * @method userSearchSelected
   * 
   * @returns {void}
  */
  userSearchSelected(): void {
    this.isHashtagSelected = false;
    this.isUserSelected = true;
    this.router.navigate(['user-search']);
  }
}
