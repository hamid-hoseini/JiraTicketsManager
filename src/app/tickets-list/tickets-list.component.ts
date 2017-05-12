import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { TicketClass }         from '../ticket-class';
import { TicketService }  from '../ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  tickets : TicketClass[];
  constructor(private ticketService: TicketService,
              private router: Router) {

  }
  getTickets(): void {
    this.ticketService
      .getTickets()
      .then(tickets => this.tickets = tickets);
  }

  modifyTicket(ticket: TicketClass){
    this.router.navigate(['/addTicket', ticket.id]);
  }

  deleteTicket(ticket: TicketClass): void {
    this.ticketService
      .delete(ticket.id)
      .then(() => {
        this.tickets = this.tickets.filter(h => h !== ticket);

      });
  }

  ngOnInit() {
    this.getTickets();
  }


}
