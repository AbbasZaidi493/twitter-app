import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  /**
   * Get tweets by hashtag.
   * 
   * @method getTweetsByHashtag
   *  
   * @param {string} hashtag 
   * 
   * @returns {Observable<Object>} - user tweets.
  */
  getTweetsByHashtag(hashtag: string): Observable<Object> {
    /**
     *This 'https://am-twitter-scrape.herokuapp.com' endpoint was giving cors error. So, i had to give cors-anywhere prefix to resolve the error.
     */
    return this.http.get('https://cors-anywhere.herokuapp.com/' + environment.API + '/hashtags/' + hashtag + '?pages_limit=3&wait=0');
  }

  /**
   * Get tweets by user id
   * 
   * @method getTweetsByUser
   *  
   * @param {string} user 
   * 
   * @returns {Observable<Object>} - user tweets
  */
  getTweetsByUser(user: string): Observable<Object> {
    return this.http.get('https://cors-anywhere.herokuapp.com/' + environment.API + '/users/' + user + '?pages_limit=3&wait=0');
  }

  /**
   * Truncates provided tweet to 50 characters.
   * 
   * @method truncateTweet
   *  
   * @param {string} tweet 
   * 
   * @returns {string} - truncated tweet.
  */
  static truncateTweet(tweet: string): string {
    let res = '';
    if (tweet.length > 50) {
      for (var i = 0; i < 50; i++) {
        res = res + tweet[i];
      }
      res = res + '...';
      return res;
    } else {
      return tweet;
    }
  }

  /**
   * Fetch first two hashtags from array of hashtags.
   * 
   * @method getRequiredHashtags
   *  
   * @param {string[]} hashtags
   * 
   * @returns {string[]} - array of hashtags of length two or less.
  */
  static getRequiredHashtags(hashtags: string[]): string[] {
    let res = [];
    if (hashtags.length > 2) {
      for (var i = 0; i < 2; i++) {
        res.push(hashtags[i]);
      }
    } else {
      res = hashtags;
    }
    return res;
  }

  /**
   * Modify date to “Month Day Year” format.
   * 
   * @method modifyDate
   *  
   * @param {string} date
   * 
   * @returns {string} - modified date
  */
  static modifyDate(date: any): string {
    let res = '';
    date = date.split(' - ');
    date = date[1].split(' ');
    res = date[1] + ' ' + date[0] + ', ' + date[2];
    return res;
  }
}
