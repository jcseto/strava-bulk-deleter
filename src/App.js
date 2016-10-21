import React from 'react';
import './App.css';
import ConnectStrava from './components/ConnectStrava';

var App = React.createClass({
  render: function(){
    return(
      <div className="App">
        <div className="App-header">
          <h1>Strava Deleter</h1>
          <h2> Connect to your Strava account to deleted unwanted Activities! </h2>
        </div>
        <div id="main"> 
          <ConnectStrava />
        </div>
      </div>
    )
  }
});

export default App;
