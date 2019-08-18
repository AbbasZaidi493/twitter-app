import { Component, OnInit } from '@angular/core';
import { CoreService } from "../services/core.service";
import { NgxSpinnerService } from 'ngx-spinner';
var vm;

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.css'],
  providers: [CoreService]
})
export class HashtagSearchComponent implements OnInit {
  searchText: string = '';
  twitterResult: any = [];
  requiredData: any = [];
  searchError: string = '';

  constructor(private coreService: CoreService, private spinner: NgxSpinnerService) { 
    vm = this;
  }

  ngOnInit() {
  }

  /**
   * Get tweets from twitter api.
   * Display error messages if search field is empty, if response is null or api returns an error.
   * Construct required data for table and pass it to custom-table component.
   * 
   * @method getTweetsByHashtag 
   * 
   * @returns {void}
  */
  getTweetsByHashtag(): void {
    vm.searchError = '';
    vm.twitterResult = [];
    vm.requiredData = [];
    if(vm.searchText === '') {
      vm.searchError = 'Please enter text in search field';
    } else {
      vm.spinner.show();
      vm.coreService.getTweetsByHashtag(vm.searchText).subscribe(res => {
        vm.spinner.hide();
        if (res) {
          vm.twitterResult = res;
          vm.requiredData = vm.twitterResult.map(tweet => ({ 
            Tweet: CoreService.truncateTweet(tweet.text),
            Likes: tweet.likes,
            Replies: tweet.replies,
            Retweets: tweet.retweets,
            Hashtags: CoreService.getRequiredHashtags(tweet.hashtags),
            Date: CoreService.modifyDate(tweet.date)
          }));
        }
        if (!res || res.length === 0) {
          vm.searchError = 'No result matches your search Criteria';
        }
      }, err => {
        console.error('Error in search Endpoint', err);
        vm.spinner.hide();
        vm.searchError = 'Something went wrong. Please contact support';
      });
    }
  }

}
