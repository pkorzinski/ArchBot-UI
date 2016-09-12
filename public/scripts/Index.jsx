import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import Login from './Login.jsx';

// rendering login component first -- login will render app after authorization
ReactDOM.render(<Login/>, document.getElementById('DogeBotLogin'))

// ReactDOM.render(<App/>, document.getElementById('DogeBotApp'));
