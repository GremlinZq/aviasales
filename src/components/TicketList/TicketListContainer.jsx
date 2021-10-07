import { connect } from 'react-redux';
import TicketList from './TicketList';

const mapStateToProps = state => {
  return {
    tickets: state.filter.tickets,
    filter: state.filter.filter,
    isFetching: state.filter.isFetching,
  }
};

export default connect(mapStateToProps, {})(TicketList)