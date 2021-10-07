import React from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import './Ticket.scss';
import uniqueId from 'lodash.uniqueid';

const Ticket = props => {
  const { price, segments, carrier } = props;

  const flightDuration = (duration) => `${Math.trunc(duration / 60)}ч ${duration % 60}м`;

  return (
    <li className='ticket'>
      <div className='ticket-header d-flex align-items-center justify-content-between'>
        <span className='price'>{price.toLocaleString('ru-RU')} Р</span>
        <img src={`http://pics.avs.io/150/50/${carrier}.png`} alt={carrier} />
      </div>
      <div className='ticket-info row'>
        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>{segments[0].origin}-{segments[0].destination}</span>
          <div className='ticket-info-time'>
            {format(new Date(segments[0].date), 'hh:mm')}
            -
            {format(new Date(segments[0].date).getTime() + segments[0].duration * 60000, 'hh:mm')}
          </div>
        </div>
        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>в пути</span>
          <div className='ticket-info-time'>{flightDuration(segments[0].duration)}</div>
        </div>
        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>{segments[0].stops.length} пересадки</span>
          <div className='ticket-info-time'>
            <div className='ticket-info-time'>{segments[0].stops.map(item => <span key={uniqueId()} style={{marginRight: 5}}>{item}</span>)}</div>
          </div>
        </div>


        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>{segments[1].origin}-{segments[1].destination}</span>
          <div className='ticket-info-time'>
            {format(new Date(segments[1].date), 'hh:mm')}
            -
            {format(new Date(segments[1].date).getTime() + segments[1].duration * 60000, 'hh:mm')}
          </div>
        </div>
        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>в пути</span>
          <div className='ticket-info-time'>{flightDuration(segments[1].duration)}</div>
        </div>
        <div className='col-4 pb-2'>
          <span className='ticket-info-heading'>{segments[1].stops.length} пересадки</span>
          <div className='ticket-info-time'>{segments[1].stops.map(item => <span key={uniqueId()} style={{marginRight: 5}}>{item}</span>)}</div>
        </div>
      </div>
    </li>
  );
};

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
  carrier: PropTypes.string.isRequired,
}

export default Ticket;