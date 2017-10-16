import React, { Component } from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
	
} from "react-router-dom";

import { 
FacebookLogin 
} from 'react-facebook-login-component';
 

import Utils from "./Utils.js";




class SignUp extends Component {

	constructor(props,context) {
		super(props,context);
		this.inputName = undefined;
		this.inputEmail = undefined;
		this.inputpassword = undefined;
		this.state = {
			goFordward: false,
			complete: false
		};
	}
	responseFacebook (response) {
		console.log(response);
		//anything else you want to do(save to localStorage)... 
	  } 
		formsName(e) {
		this.inputName = e.target.value;

		// let patron = /[^a-zA-Z -]|( )|(--)|(^s*$)/;
		// 	if(patron.test(this.inputName)) {
		// 		alert('no es correcta')

		// 	}else alert( 'es correcta')

	}
	formsEmail(e) {
		this.inputEmail = e.target.value;
		// if(this.inputEmail = '') {

		// }
		// model.userInfo.email = this.inputEmail

	}
	formsPassword(e) {
		this.inputpassword = e.target.value;
	}
	render() {
		const { model } = this.props;
		const onInputChange = e => {
			this.setState({
				goFordward: e.target.checked
			});
		};
		const prueba = () => {
			model.userInfo.email = this.inputEmail
			model.userInfo.name = this.inputName
			model.userInfo.password = this.inputpassword
		}
		const validation = e => {
			this.setState = {
				complete: true
			};
		};

		return (
			<div>
				<section className="container-fluid form text-center">
					<header>
						<div className="btnBack">
							<NavLink to="/signup-validation">
								<i className="material-icons back">keyboard_arrow_left</i>
							</NavLink>
						</div>
						<h1 className="text-center">Iniciar sesión</h1>

						<hr />
					</header>
					<form
						className="form-horizontal">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="glyphicon glyphicon-user" />
							</span>
							<input
								value={this.inputName}
								title="Coloca tu nombre"
								type="text"
								className="form-control"
								name="name"
								placeholder="Name"
								onChange={e => (this.formsName(e))}
							/>
						</div>
						<br />
						<div className="input-group">
							<span className="input-group-addon">
								<i className="glyphicon glyphicon-envelope" />
							</span>
							<input
								title="Coloca tu e-mail"
								type="email"
								className="form-control"
								name="email"
								placeholder="Correo"
								onChange={e => (this.formsEmail(e))}
							/>
						</div>
						<br />
						<div class="input-group">
							<span className="input-group-addon">
							<i class="fa fa-unlock" aria-hidden="true"></i>
							</span>
							<label for="exampleInputPassword1"></label>
							<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
						</div>
						<div />
						<br />
						<label className="form-check-label">
							<input
								className="form-check-input"
								id="agreeUser"
								type="checkbox"
								onChange={onInputChange}
							/>
							Recuerdame 
							<br />
						<a href="lyft.com"> Terminos & Servicios</a>
						</label>
						
		 <br />
						{this.state.goFordward ? (
							<NavLink
								onClick={prueba}
								to={"/lyftmap"}
								className="btn btn-lg btn-block btn-lyft"
							>
								Next
              </NavLink>
						) : (
								<button className="btn btn-lg btn-block btn-lyft disabled">
									Next
              </button>
							)}
					</form>
					<div>
		   <FacebookLogin socialId="732068980315428"
						  language="en_US"
						  scope="public_profile,email"
						  responseHandler={this.responseFacebook}
						  xfbml={true}
						  fields="id,email,name"
						  version="v2.5"
						  className="facebook-login"
						  buttonText="Login With Facebook"/>
		 </div>
				</section>
			</div>
		);
	}
}
export default SignUp;

	
	
	
	
