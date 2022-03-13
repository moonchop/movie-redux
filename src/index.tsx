import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';


const store = createStore(rootReducer); // 스토어를 만듭니다.

console.log(store.getState()); // 스토어의 상태를 확인해봅시다.
console.log("hello")
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

