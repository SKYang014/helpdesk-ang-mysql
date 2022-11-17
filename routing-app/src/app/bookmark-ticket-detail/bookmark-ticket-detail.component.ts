import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-bookmark-ticket-detail',
  templateUrl: './bookmark-ticket-detail.component.html',
  styleUrls: ['./bookmark-ticket-detail.component.css']
})
export class BookmarkTicketDetailComponent implements OnInit {

  @Input() ticket: Ticket = {
    id:0,
      title: '',
      description: '',
      submittedBy: '',
      bookmarked: false,
      resolved: false,
      resolvedInfo: '',
      resolvedBy: '',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
