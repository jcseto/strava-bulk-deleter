import React, { Component } from 'react';
import logo from './logo.svg';
import stravaLogin from './Assets/LoginWithStrava.png';
import './App.css';


var App = React.createClass({
  render: function(){
    return(
      <div className="App">
        <div className="App-header">
          <h1>Strava Deleter</h1>
          <h2> Connect to your Strava account to deleted unwanted Activities! </h2>
        </div>
        <div id="main">
          <a href="https://www.strava.com/oauth/authorize">
            <img src={stravaLogin}></img>
          </a>
        </div>
      </div>
    )
  }
});

export default App;
