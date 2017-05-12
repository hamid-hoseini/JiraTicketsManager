/**
 * Created by hamidhoseini on 4/27/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }   from './about/about.component';
import { AddTicketComponent }      from './add-ticket/add-ticket.component';
import { TicketsListComponent }  from './tickets-list/tickets-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'addTicket/:id', component: AddTicketComponent },
  { path: 'ticketsList',     component: TicketsListComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
