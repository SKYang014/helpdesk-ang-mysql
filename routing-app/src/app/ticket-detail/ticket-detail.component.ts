import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @Input() ticket: Ticket = {
    Id:0,
    Title: '',
    Description: '',
    SubmittedBy: '',
    Bookmarked: false,
    Resolved: false,
    ResolvedInfo: '',
    ResolvedBy: '',
	};

	@Output() delete:EventEmitter<number> = new EventEmitter<number>();
	@Output() update:EventEmitter<Ticket> = new EventEmitter<Ticket>();
  
  editMode: boolean = false;
	editTitle: string = '';
	editDescription: string = '';
	editSubmittedBy: string = '';
	editBookmarked: boolean = false;
	editResolved: boolean = false;
	editResolvedInfo: string = '';
  editResolvedBy: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	deleteMe() {
		this.delete.emit(this.ticket.Id);
	}

	turnOnEditMode() {
		this.editMode = true;
    this.editTitle = this.ticket.Title;
    this.editDescription = this.ticket.Description;
    this.editSubmittedBy = this.ticket.SubmittedBy;
    this.editBookmarked = this.ticket.Bookmarked;
    this.editResolved = this.ticket.Resolved;
    this.editResolvedInfo = this.ticket.ResolvedInfo;
    this.editResolvedBy = this.ticket.ResolvedBy;
	}

	saveChanges() {
		let updatedTicket: Ticket = {
			Id: this.ticket.Id,
			Title: this.editTitle,
			Description: this.editDescription,
			SubmittedBy: this.editSubmittedBy,
			Bookmarked: this.editBookmarked,
			Resolved: this.editResolved,
			ResolvedInfo: this.editResolvedInfo,
      ResolvedBy: this.editResolvedBy
		};
		this.update.emit(updatedTicket);
	}

	cancel() {
		this.editMode = false;
	}

}
