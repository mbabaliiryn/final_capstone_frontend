import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Router from './components/Router'
import { AUTHENTICATED } from './actions/index'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const user = localStorage.getItem('user')

if(user){
  store.dispatch({
    type: AUTHENTICATED
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);