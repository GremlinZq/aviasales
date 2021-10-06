import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import filterReducer from './reducers/filter-reducer';

const reducers = combineReducers({
  filter: filterReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store;