import React from 'react';
import Ticket from './Ticket/Ticket';
import './TicketList.scss';


const TicketList = () => (
  <>
    <ul className='ticket-list row'>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
    <button type='button' className='btn show-more btn-primary'>показать еще 5 билетов!</button>
  </>
);

export default TicketList;