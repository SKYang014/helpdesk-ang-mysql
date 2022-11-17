import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NewticketComponent } from './newticket/newticket.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookmarked', component: BookmarkComponent },
  { path: 'newticket', component: NewticketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }