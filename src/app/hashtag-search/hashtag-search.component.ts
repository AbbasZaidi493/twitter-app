import { Component, OnInit } from '@angular/core';
import { CoreService } from "../services/core.service";
var vm;

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.css'],
  providers: [CoreService]
})
export class HashtagSearchComponent implements OnInit {
  searchText: String = '';
  twitterResult: any = [];
  requiredData: any = [];

  constructor(private coreService: CoreService) { 
    vm = this;
  }

  ngOnInit() {
  }

  truncateTweet(tweet) {
    let res = '';
    if(tweet.length > 50) {
      for(var i=0; i<50; i++) {
        res = res + tweet[i];
      }
      res = res + '...';
      return res;
    } else {
      return tweet;
    }
  }

  getRequiredHashtags(hashtags) {
    let res = [];
    if(hashtags.length > 2) {
      for(var i=0; i<2; i++) {
        res.push(hashtags[i]);
      }
     } else {
       res = hashtags;
     }
     return res;
  }

  modifyDate(date) {
    let res = '';
    date = date.split(' - ');
    date = date[1].split(' ');
    res = date[1] +  ' ' + date[0] + ', ' + date[2];
    return res;
  }

  getTweetsByHashtag() {
    console.log('search text ---', vm.searchText);
    vm.coreService.getTweetsByHashtag(vm.searchText).subscribe(res => {
      if (res) {
        console.log('searchResults', res);
        vm.twitterResult = res;
        vm.requiredData = vm.twitterResult.map(tweet => ({ 
          text: tweet.text,
          likes: tweet.likes,
          replies: tweet.replies,
          retweets: tweet.retweets,
          hashtags: tweet.hashtags,
          date: tweet.date
         }));
         vm.requiredData.forEach(function(data) {
           let tweet = data.text;
           let hashtags = data.hashtags;
           let date = data.date;
           data.hashtags = vm.getRequiredHashtags(hashtags);
           data.text = vm.truncateTweet(tweet);
           data.date = vm.modifyDate(date);
         });
      }
    }, err => {
      console.error('Error in search Endpoint', err);
    });
  }

}
