import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  getAll(cb: any) {
		this.http.get<Ticket[]>('https://localhost:7130/Ticket').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		this.http.get<Ticket>(`https://localhost:7130/Ticket/${id}`).subscribe(cb);
	}

	add(cb: any, ticket: Ticket) {
		this.http.post<Ticket>('https://localhost:7130/Ticket', ticket).subscribe(cb);
	}

	delete(cb: any, id: number) {
		this.http.delete<ApiResponse>(`https://localhost:7130/Ticket/${id}`).subscribe(cb);
	}

	update(cb: any, ticket: Ticket) {
		this.http.put<ApiResponse>('https://localhost:7130/Ticket', ticket).subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
