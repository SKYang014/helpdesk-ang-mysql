import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
selector: 'app-bookmark',
templateUrl: './bookmark.component.html',
styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

TheFavList: Ticket[] = [];

constructor(private ticketSrv: TicketService) { }

ngOnInit(): void {
	this.refresh();
}

refresh() {
		this.ticketSrv.getAll(

			// This function receives the data
			(result: Ticket[]) => {
				console.log(result);
				this.TheFavList = result;
				console.log(this.TheFavList)
			}

		);
	}

deleteOne(Id: number) {
		this.ticketSrv.delete(
				() => {
					console.log('BACK FROM DELETE');
					this.refresh();
				}, Id );
		console.log('LINE AFTER DELETE');
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
