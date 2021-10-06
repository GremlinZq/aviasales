import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import Ticket from './Ticket/Ticket';
import './TicketList.scss';

const TicketList = props => {
  const { tickets, filter } = props;

  let filteredTickets = [];

  if (filter.all) {
    filteredTickets = tickets.map(ticket => ticket);
  }

  if (filter.noTransfer) {
    filteredTickets = [...filteredTickets, ...tickets.filter(ticket => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0)];
  }

  if (filter.oneTransfer) {
    filteredTickets = [...filteredTickets, ...tickets.filter(ticket => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1)];
  }
  if (filter.twoTransfer) {
    filteredTickets = [...filteredTickets, ...tickets.filter(ticket => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2)];
  }

  if (filter.threeTransfer) {
    filteredTickets = [...filteredTickets, ...tickets.filter(ticket => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3)];
  }

  console.log(filteredTickets);

  const readyTickets = filteredTickets.map(ticket => <Ticket key={uniqueId('ticket-')} {...ticket} />);

  const importantTickets = readyTickets.slice(0, 5);

  return (
    <>
      <ul className='ticket-list row'>
        {importantTickets}
      </ul>
    </>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default TicketList;