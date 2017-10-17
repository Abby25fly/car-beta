import React, { Component } from "react";
import {
	NavLink
	
} from "react-router-dom";
import Utils from "./Utils.js";
import './SignUp.css';

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
		formsName(e) {
		this.inputName = e.target.value;

	}
	formsEmail(e) {
		this.inputEmail = e.target.value;
	}
	formsPassword(e) {
		this.inputpassword = e.target.value;
	}
	render() {
		const onInputChange = e => {
			this.setState({
				goFordward: e.target.checked
			});
			
		};
		const saveInfo = () => {
			this.props.info.email = this.inputEmail
			this.props.info.user = this.inputName
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
						className="">
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
								required
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
								required
							/>
						</div>
						<br />
						<div className="input-group">
							<span className="input-group-addon">
							<i className="fa fa-unlock" aria-hidden="true"></i>
							</span>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
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
								onClick={saveInfo}
								to={"/map"}
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
      </div>
				</section>
			</div>
		);
	}
}
export default SignUp;

	
	
	
	
