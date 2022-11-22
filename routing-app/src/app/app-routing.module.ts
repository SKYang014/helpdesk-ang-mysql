import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookmarked', component: BookmarkComponent },
  { path: 'allTickets', component: AllTicketsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }