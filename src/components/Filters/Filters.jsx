import React from 'react';
import { Checkbox } from 'antd';
import './Filters.scss';


const Filters = () => (
  <div className='filters'>
    <h3>количество пересадок</h3>
    <ul>
      <li className='filter-item'>
        <Checkbox>Все</Checkbox>
      </li>
      <li className='filter-item'>
        <Checkbox>Без пересадок</Checkbox>
      </li>
      <li className='filter-item'>
        <Checkbox>1 пересадка</Checkbox>
      </li>
      <li className='filter-item'>
        <Checkbox>2 пересадки</Checkbox>
      </li>
      <li className='filter-item'>
        <Checkbox>3 пересадки</Checkbox>
      </li>
    </ul>
  </div>
);

export default Filters;