import { connect } from 'react-redux';
import { getAllTickets } from '../redux/reducers/filter-reducer';
import App from './App';

const mapStateToProps = state => {
  return {
      tickets: state.filter.tickets,
  }
}

export default connect(mapStateToProps, {getAllTickets})(App);