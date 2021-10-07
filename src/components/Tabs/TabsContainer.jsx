import { connect } from 'react-redux';
import { setOptimal, setTheCheapest, setTheFastest } from '../../redux/reducers/filter-reducer';
import Tabs from './Tabs';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {setTheCheapest, setTheFastest, setOptimal})(Tabs)