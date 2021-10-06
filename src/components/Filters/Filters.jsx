import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = props => {
    const { filter, setFilter } = props;
    const [filterList, setFilterList] = useState(filter);

    const putEverything = event => {
      setFilterList(actual => {
        return {
          ...actual,
          all: event.target.checked,
          noTransfer: event.target.checked,
          oneTransfer: event.target.checked,
          twoTransfer: event.target.checked,
          threeTransfer: event.target.checked,
        };
      });
    };

    const chooseOne = event => {
      const { target } = event;
      const { value, checked } = target;

      setFilterList(actual => {
        return {
          ...actual,
          [value]: checked,
        };
      });
    };

    useEffect(() => {
      setFilter(filterList);
    }, [filterList, setFilter, setFilterList]);

    return (
      <div className='filters'>
        <h3>количество пересадок</h3>
        <ul role='article'>
          <li className='filter-item' onKeyDown={null}>
            <Checkbox value='all' checked={filter.all} onChange={putEverything}>Все</Checkbox>
          </li>
          <li className='filter-item'>
            <Checkbox value='noTransfer' checked={filter.noTransfer} onChange={chooseOne}>Без
              пересадок</Checkbox>
          </li>
          <li className='filter-item'>
            <Checkbox value='oneTransfer' checked={filter.oneTransfer} onChange={chooseOne}>1
              пересадка</Checkbox>
          </li>
          <li className='filter-item'>
            <Checkbox value='twoTransfer' checked={filter.twoTransfer} onChange={chooseOne}>2
              пересадки</Checkbox>
          </li>
          <li className='filter-item'>
            <Checkbox value='threeTransfer' checked={filter.threeTransfer} onChange={chooseOne}>3
              пересадки</Checkbox>
          </li>
        </ul>
      </div>
    );
  }
;

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(PropTypes.bool).isRequired,
  // getAllTickets: PropTypes.func.isRequired,
  // userId: PropTypes.string.isRequired,
}
export default Filters;