import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Spin } from 'antd';
import getFilteredTickets from '../../utils/getFilteredTickets';
import Ticket from './Ticket/Ticket';
import './TicketList.scss';

const TicketList = props => {
  const { tickets, filter, isFetching } = props;


  const filteredTickets = getFilteredTickets(tickets, filter);

  const ticketsReady = filteredTickets.map(ticket => <Ticket key={uniqueId()} {...ticket} />);
  const importantTickets = ticketsReady.slice(0, 5);

  return (
    <>
      <ul className='ticket-list row'>
        {filteredTickets.length === 0
          ? <div className='ticket-list-description mb-3'>Рейсов, подходящих под заданные фильтры, не найдено</div>
          : null
        }
        {!isFetching ? <Spin /> : importantTickets}
        <button type='button' className='show-more'>Показать еще 5 билетов!</button>
      </ul>
    </>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.bool).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TicketList;