import { connect } from 'react-redux';
import { setFilter } from '../../redux/reducers/filter-reducer';
import Filters from './Filters';

const mapStateToProps = state => ({ filter: state.filter.filter, userId: state.filter.userId });

const FilterContainer = connect(mapStateToProps, { setFilter })(Filters);

export default FilterContainer;