import { Component, OnInit } from '@angular/core';
// import { ApiResponse } from '../api-response';
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
				console.log(this.TheList)
			}

		);
	}

//   test(item: any) {
// 	console.log('===================');
// 	console.log(item);
//   }

deleteOne(Id: number) {
		this.ticketSrv.delete(
				() => {
					console.log('BACK FROM DELETE');
					this.refresh();
				}, Id );
		console.log('LINE AFTER DELETE');
	}

	saveNew() {
		let newTicket: Ticket = {
			id: 0,
			title: this.newTitle,
			description: this.newDescription,
			submittedBy: this.newSubmittedBy,
			bookmarked: this.newBookmarked,
			resolved: this.newResolved,
			resolvedInfo: this.newResolvedInfo,
			resolvedBy: this.newResolvedBy
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
			() => {
				this.refresh();
			},
			updatedTicket
		);
	}

}
