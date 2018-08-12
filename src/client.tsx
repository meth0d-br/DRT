import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import storeHelper from './helpers/storeHelper';
import { App } from './index';

ReactDOM.render(
  <Provider store={storeHelper}>
    <App />
  </Provider>,
  document.getElementById('root')
);
