import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = props => {
  const {setTheCheapest, setTheFastest} = props;

  return (
    <div className='tabs row mb-3'>
      <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary' onClick={setTheCheapest}>Самый дешевый</button>
      <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary' onClick={setTheFastest}>Самый быстрый</button>
      <button type='button' className='col-xs-1 col-sm-4 col-md-4 btn btn-outline-primary'>оптимальный</button>
    </div>
  );
};

Tabs.propTypes = {
  setTheCheapest: PropTypes.func.isRequired,
  setTheFastest: PropTypes.func.isRequired,
}

export default Tabs;