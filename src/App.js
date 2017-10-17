import React, {Component} from 'react';
import Parts from './Parts';
import SignUp from './SignUp';
import SignUpCar from './SignUpCar';
import SignUpUser from './SignUpUser';
import Map from './Map';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import Home from './Home';
import Damage from './damage'


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
				<Route  path="/damage" render={() => <Damage model={model} />}/>	   
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/signup" render={() => <SignUp model={model} />}/>
				<Route  path="/signupCar" render={() => <SignUpCar model={model} />}/>
				<Route  path="/signupUser" render={() => <SignUpUser model={model} />}/>
				<Route  path="/showParts" render={() => <Parts model={model} />}/>
				<Route  path="/camera" render={() => <Parts model={model} />}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}
export default App;

