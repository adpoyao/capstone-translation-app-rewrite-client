import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './nav';
import Landing from './landing/landing';
import Login from './landing/log-in';
import Signup from './landing/sign-up';
import Home from './home/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route path="/home" component={Home}/>
            </Switch>
          </main>
        </div>
      </Router>
    )      
  }
}

const mapStateToProps = state => {
}

export default connect(mapStateToProps)(App);