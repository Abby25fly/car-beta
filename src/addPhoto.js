import React, { Component } from "react";
import logo from "./logito.png";
import logoMax from "./logo.png";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import "./Home.css";

class NavbarHome extends Component{
	render() {
    
		return (
                <header id="">
                    
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                            <div className="col-md-8 col-xs-8"></div>
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                        </div>
                </header>
);
}}


class TitleHome extends Component{
	render() {
		return (
      <div className="text-center">
        <h1>Fotos de daños</h1>
      </div> 
  );
} };

class Photos extends Component{
	render(){
		return(
			<div>Parte frontal:
			<div className="col-xs-12">
			<button className="col-xs-10 text-center add">Añadir foto...</button>
				<div className="col-xs-2">
					<NavLink to={"/"}className="btn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></NavLink>
				</div>
			</div>
			</div>
		);
	}
}


class AddPhoto extends Component{
	render () {
		return(
			<div className="container">
				<div className="container-fluid">
					<div className=" row">
						<NavbarHome/>
        				<hr/>
						<TitleHome/>
        				<br/>
						<Photos/>
					</div>
				</div>
			</div>
		);
	};
}

export default AddPhoto ;
