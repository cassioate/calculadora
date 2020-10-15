import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calaculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <div>
    <h1>Calculadora</h1>
  <React.StrictMode>
    <Calaculator />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
