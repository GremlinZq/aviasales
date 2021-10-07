import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './app/AppContainer'


render(<Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#root'));