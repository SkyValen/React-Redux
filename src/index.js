import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const {inc, dec, rnd, inc5, dec3} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
  const random = Math.random() * 10
  const value = Math.floor(random);
  store.dispatch(rnd(value));
});

document.getElementById('inc5').addEventListener('click', inc5);

document.getElementById('dec3').addEventListener('click', dec3);


// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

ReactDOM.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

