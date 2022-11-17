import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TheList: Ticket[] = [];

	// Variables for entering a new employee
	newTitle: string = '';
	newDescription: string = '';
	newSubmittedBy: string = '';
	newBookmarked: boolean = false;
	newResolved: boolean = false;
	newResolvedInfo: string = '';
  newResolvedBy: string = '';

  constructor(private ticketSrv: TicketService) { }

	ngOnInit(): void {
		this.refresh();
	}
  refresh() {
		this.ticketSrv.getAll(

			// This function receives the data
			(result: Ticket[]) => {
        console.log(result);
				this.TheList = result;
			}

		);
	}

  deleteOne(Id: number) {
		this.ticketSrv.delete(
				(result: ApiResponse) => {
					console.log('BACK FROM DELETE');
					this.refresh();
				}, Id );
		console.log('LINE AFTER DELETE');
	}

	saveNew() {
		let newTicket: Ticket = {
			Id: 0,
			Title: this.newTitle,
			Description: this.newDescription,
			SubmittedBy: this.newSubmittedBy,
			Bookmarked: this.newBookmarked,
			Resolved: this.newResolved,
			ResolvedInfo: this.newResolvedInfo,
      ResolvedBy: this.newResolvedBy
		};

		this.ticketSrv.add(
			(result: Ticket) => {
				this.refresh();
			},
			newTicket
		);
	}

	updateOne(updatedTicket: Ticket) {
		this.ticketSrv.update(
			(result: ApiResponse) => {
				this.refresh();
			},
			updatedTicket
		);
	}

}
