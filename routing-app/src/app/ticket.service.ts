import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  getAll(cb: any) {
		// https://localhost:7147/Ticket
		this.http.get<Ticket[]>('https://localhost:7130/Ticket').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Ticket>(`https://localhost:7130/Ticket/${id}`).subscribe(cb);
	}

	add(cb: any, emp: Ticket) {
		this.http.post<Ticket>('https://localhost:7130/Ticket', emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		this.http.delete<ApiResponse>(`https://localhost:7130/Ticket/${id}`).subscribe(cb);
	}

	update(cb: any, emp: Ticket) {
		this.http.put<ApiResponse>('https://localhost:7130/Ticket', emp).subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
