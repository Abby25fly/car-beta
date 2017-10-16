import React, { Component } from 'react';
import './App.css';
import Parts from './Parts';
import SignUpCar from './SignUpCar';
import SignUpUser from './SignUpUser';
import Map from './Map';

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (
    <Map model={model} />
  )
}

export default App;

