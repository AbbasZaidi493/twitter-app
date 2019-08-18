import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  getTweetsByHashtag(hashtag) {
    return this.http.get('https://cors-anywhere.herokuapp.com/'+ environment.API + '/hashtags/'+ hashtag + '?pages_limit=3&wait=0');
  }

}
