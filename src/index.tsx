import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux-practice/modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer); // 스토어를 만듭니다.


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

