import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { HashtagSearchComponent } from './hashtag-search/hashtag-search.component';


const routes: Routes = [
  { path: '', component: HashtagSearchComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'hashtag-search', component: HashtagSearchComponent },
  //any other route will take you to HashtagSearchComponent
  { path: '**', component: HashtagSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }