import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Logo from '../common/img/logo/Logo.svg';
import FilterContainer from '../components/Filters/FiltersContainer';
import TabsContainer from '../components/Tabs/TabsContainer';
import TicketListContainer from '../components/TicketList/TicketListContainer';

import './App.scss';

const App = props => {
  const {getAllTickets, tickets } = props;

  useEffect(() => {
    if (tickets.length === 0) {
      getAllTickets()
    }
  },[tickets, getAllTickets])

  return (
    <div className='bg'>
      <div className='container'>
        <div className='row'>
          <div className='logo d-flex justify-content-center'>
            <img src={Logo} alt='' />
          </div>

          <div className='mb-3 col-xs-3 col-sm-12 col-md-4 col-lg-4'>
            <FilterContainer />
          </div>
          <div className='col-xs-5 col-sm-12 col-md-8 col-lg-8'>
            <TabsContainer />
            <TicketListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  getAllTickets: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default App;