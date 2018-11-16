import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './containers/login/Login'
import Dashboard from './containers/dashboard/Dashboard'

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect to="/login" component={Login} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
