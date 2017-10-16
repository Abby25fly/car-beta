import React, { Component } from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from "react-router-dom";

import Utils from "./Utils.js";
class SignUpForm extends Component {

	constructor(props) {
		super(props);
		this.inputName = undefined;
		this.inputEmail = undefined;
		this.inputpassword = undefined;
		this.state = {
			goFordward: false,
			complete: false
		};
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
						<div className="container">
						<div className="row">
							<div className="col-md-1 col-xs-1 text-center">
							<a href="javascript:window.history.back();">
								<i
								className="fa fa-chevron-left arrow"
								aria-hidden="true" />
							</a>
							</div>
							<div className="col-md-10 col-xs-10 text-center">
							<h1>Iniciar sesión</h1>
							</div>
						</div>
						</div>
					</header>
					<form
						className="form-horizontal">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="glyphicon glyphicon-user" />
							</span>
							<input
								value={this.inputName}
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
								type="email"
								className="form-control"
								name="email"
								placeholder="Correo"
								onChange={e => (this.formsEmail(e))}
							/>
						</div>
						<br />
						<div className="input-group">
							<span className="input-group-addon">
							<i className="fa fa-unlock" aria-hidden="true"></i>
							</span>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
				</section>
			</div>
		);
	}
}
export default SignUpForm;