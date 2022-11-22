import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDesk';
  constructor(public router: Router) { }
  // constructor(public http: HttpClient, public ticketSrv: TicketService) { }

  // finishedWithCall(obj: any) {
	// 	console.log(obj);
	// }

  // getTickets() {
	// 	this.ticketSrv.getAll(
	// 		(result: Ticket[]) => {
	// 			console.log(result);
	// 		}
	// 	)
	// }
}
