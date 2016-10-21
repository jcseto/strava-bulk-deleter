import React, { Component } from 'react';
import stravaLogin from '../Assets/LoginWithStrava.png';

const authorizationString = "https://www.strava.com/oauth/authorize?client_id=14220&scope=write,view_private&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force";

var ConnectStrava = React.createClass({
  render: function(){
    return(
        <a id="connectStravaButton" href={authorizationString} title="Connect with Strava">
        	<img src={stravaLogin}></img>
        </a>
    )
  }
});

export default ConnectStrava;