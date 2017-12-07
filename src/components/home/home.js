import React from 'react';
import connect from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './dashboard';
import SavedPhrases from './saved-phrases';
import EditList from './edit-list';
import Edit from './edit';

import './home.css'

export default class Home extends React.Component {
  render(){
    console.log(this.props.match.path);
    return (
      <div className="home-container">
        <Dashboard/>
        <Switch>
          <Route exact path="/home" component={SavedPhrases}/>
          <Route exact path="/home/phrases/edit" component={EditList}/>
          <Route exact path="/home/phrases/edit/:id" component={Edit}/>
        </Switch>
      </div>
    )
  }
}