import React, {Component} from 'react';
import Parts from './Parts';
import SignUpCar from './SignUpCar';
import SignUpUser from './SignUpUser';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';
import SignUp from './SignUp';


const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route path="/Lyft-Evaluado"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/signup" render={() => <SignUp model={model} />}/>
			
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)


export default App;
