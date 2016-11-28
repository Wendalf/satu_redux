import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {counter: 0}

const reducer = (state=defaultState, action) => {
  // ACTION {type: "INCREMENT", counter: 9}
  switch(action.type) {
    case "INCREMENT":
      let incremented = state.counter + 1
      return {counter: incremented};
    case "DECREMENT":
    let decremented = state.counter - 1
    return {counter: decremented};
    default:
     return state;
  }
}


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
