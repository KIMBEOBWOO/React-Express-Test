import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,BrowserRouter} from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App}>
      <Route exact path='/login' component={Login}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/signup' component={Signup}></Route>  
    </Route>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
