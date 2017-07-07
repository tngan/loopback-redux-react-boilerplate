import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SmartComponent from './containers/SmartComponent';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  		<SmartComponent />
  </Provider>,
  document.getElementById('root')
);