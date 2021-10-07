const getFilteredTickets = (tickets, filter) => {
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

  return filteredTickets;
}

export default getFilteredTickets;