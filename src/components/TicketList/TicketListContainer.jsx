import { connect } from 'react-redux';
import TicketList from './TicketList';

const mapStateToProps = state => {
  return {
    tickets: state.filter.tickets,
    filter: state.filter.filter,
  }
};

export default connect(mapStateToProps, {})(TicketList)