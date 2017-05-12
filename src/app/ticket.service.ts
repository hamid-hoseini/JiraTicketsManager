import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TicketClass } from './ticket-class';

@Injectable()
export class TicketService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private ticketsUrl = 'api/tickets';  // URL to web api


  constructor(private http: Http) { }

  getTickets(): Promise<TicketClass[]> {
    return this.http.get(this.ticketsUrl)
      .toPromise()
      .then(response => response.json().data as TicketClass[])
      .catch(this.handleError);
  }

  getTicket(id: number): Promise<TicketClass> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as TicketClass)
      .catch(this.handleError);
  }

  create(ticket: TicketClass): Promise<TicketClass> {
    return this.http
      .post(this.ticketsUrl, JSON.stringify(ticket), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as TicketClass)
      .catch(this.handleError);
  }

  update(ticket: TicketClass): Promise<TicketClass> {
    const url = `${this.ticketsUrl}/${ticket.id}`;
    return this.http
      .put(url, JSON.stringify(ticket), {headers: this.headers})
      .toPromise()
      .then(() => ticket)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
