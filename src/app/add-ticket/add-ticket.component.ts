import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {TicketClass} from '../ticket-class'
import {TicketService} from '../ticket.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  tickets : TicketClass[];
  s: string = 'this is a reset action!';

  statusItems = ['Done', 'In Progress', 'Blocked'];
  model = new TicketClass();
  submitted = false;


  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private location: Location) {

  }

  onSubmit(): void{
    this.submitted = true;
    this.route.params.subscribe(params => {
      if (+params['id'] != 0){
        this.ticketService.update(this.model)
          .then(() => this.goBack());
      } else {
        this.ticketService.create(this.model)
          .then(ticket => {
            console.log(ticket);
            this.tickets.push(ticket);
          });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  getTickets(): void {
    this.ticketService
      .getTickets()
      .then(tickets => this.tickets = tickets);
  }

  newTicket() {
    this.model = new TicketClass();
  }

  ngOnInit(): void {
    this.getTickets();
    this.route.params
      .switchMap((params: Params) => this.ticketService.getTicket(+params['id']))
      .subscribe(result => this.model = result);
  }

  resetForm(): void{

  }

}
