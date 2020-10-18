import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App name="typescript" age={18} />
  </Provider>,
  document.querySelector('#root')
);
