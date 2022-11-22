import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

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

	@Output() delete:EventEmitter<number> = new EventEmitter<number>();
	@Output() update:EventEmitter<Ticket> = new EventEmitter<Ticket>();
  
  editMode: boolean = false;
  editObj: Ticket = {
    id:0,
    title: '',
    description: '',
    submittedBy: '',
    bookmarked: false,
    resolved: false,
    resolvedInfo: '',
    resolvedBy: '',
	};

	constructor(public router: Router) { }

	ngOnInit(): void {
	}

	deleteMe() {
		// console.log(this.ticketId)
		this.delete.emit(this.ticket.id);
	}

	turnOnEditMode() {
		console.log("im in editmode");
		this.editObj.title = this.ticket.title;
		this.editObj.description = this.ticket.description;
		this.editObj.submittedBy = this.ticket.submittedBy;
		this.editObj.bookmarked = this.ticket.bookmarked;
		this.editObj.resolved = this.ticket.resolved;
		this.editObj.resolvedInfo = this.ticket.resolvedInfo;
		this.editObj.resolvedBy = this.ticket.resolvedBy;
		this.editMode = true;
	}

	saveChanges() {
		console.log("im in saved")
		this.editObj.id = this.ticket.id;
		this.update.emit(this.editObj);
	}

	cancel() {
		this.editMode = false;
	}

}
