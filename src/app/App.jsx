import React from 'react';
import 'antd/dist/antd.css';
import Logo from '../common/img/logo/Logo.svg';
import Filters from '../components/Filters/Filters';
import Tabs from '../components/Tabs/Tabs';
import TicketList from '../components/TicketList/TicketList';
import './App.scss';

const App = () => (
  <div className='bg'>
    <div className='container'>
      <div className='row'>
        <div className='logo d-flex justify-content-center'>
          <img src={Logo} alt='' />
        </div>

        <div className='mb-3 col-xs-3 col-sm-12 col-md-4 col-lg-4'>
          <Filters />
        </div>
        <div className='col-xs-5 col-sm-12 col-md-8 col-lg-8'>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  </div>
);

export default App;