import React from 'react';
import Logo from './S7Logo.svg';

import './Ticket.scss';

const Ticket = () => (
  <li className='ticket'>
    <div className='ticket-header d-flex align-items-center justify-content-between'>
      <span className='price'>13 400 Р</span>
      <img src={Logo} alt='S7Logo' />
    </div>
    <div className='ticket-info row'>
      <div className='col-4 pb-2'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>
      <div className='col-4 pb-2'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>
      <div className='col-4 pb-2'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>


      <div className='col-4'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>

      <div className='col-4'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>
      <div className='col-4'>
        <span className='ticket-info-heading'>mow-hkt</span>
        <div className='ticket-info-time'>11:20 -00:50</div>
      </div>
    </div>
  </li>
);

export default Ticket;