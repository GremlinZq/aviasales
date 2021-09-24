import React from 'react';
import './Tabs.scss';

const Tabs = () => (
  <div className='tabs row mb-3'>
        <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary'>Самый дешевый</button>
        <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary'>Самый быстрый</button>
        <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary'>оптимальный</button>
  </div>
);

export default Tabs;