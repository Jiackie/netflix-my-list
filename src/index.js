import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import MyList from './components/MyList'
// import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <MyList />
  </Provider>,
  document.getElementById('root')
);
