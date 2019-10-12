import React, { Component } from 'react';

import {Link, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

export default class App extends Component {
  render() {
    return (
      <Switch>
       <Route exact path="/" component={Login}/>
       <Route path="/admin" component={Admin}/>
       <Route path="/logout" component={Logout}/>
      </Switch>
    ); 
  }
}
