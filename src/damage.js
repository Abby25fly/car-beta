import React, { Component } from "react";
import logo from "./logito.png";
import logoMax from "./logo.png";
import uno from "./uno.png";
import dos from "./dos.png";
import tres from "./tres.png";
import cuatro from "./cuatro.png";
import cinco from "./cinco.png";
import seis from "./seis.png";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import "./damage.css";

class NavbarHome extends Component{
	render() {
    
		return (
            <div>
                <header id="">
                    <div className="container-fluid row">
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                            <div className="col-md-8 col-xs-8"></div>
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                        </div>
                    </div>
                </header>
            </div>
);
}}


class TitleHome extends Component{
	render() {
		return (
      <div className="text-center">
        <h1>¿Qué paso?</h1>
      </div> 
  );
} };


class Images extends Component {
	render () {  
		return (
        <div>
          <table className="col-md-12 col-xs-12">
            <tbody>
            <tr>
              <td className="col-xs-4">
                <img src={uno} className="img-responsive"/>
              </td>
              <td className="col-xs-4">
                <img src={dos} className="img-responsive"/>
              </td>
              <td className="col-xs-4">
                <img src={tres} className="img-responsive"/>
              </td>
            </tr>
            <tr>
              <td className="col-xs-4">
                <img src={cuatro} className="img-responsive"/>
              </td>
              <td className="col-xs-4">
                <img src={cinco} className="img-responsive"/>
              </td>
              <td className="col-xs-4">
                <img src={seis} className="img-responsive"/>
              </td>
            </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label for="comment">Descripción:</label>
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
          <div>
          <NavLink to={"/BattleUsers"}	className="btn btn-lg btn-block btn-battle">Siguiente</NavLink>
          </div>
        </div>
		);
	};
}

class Damage extends Component{
	render () {
		return(
			<div className="container">
        <div className="container-fluid">
          <div className="row">
            <NavbarHome/>
            <hr/>
            <TitleHome/>
            <br/>
            <Images/>
          </div>
        </div>
			</div>
		);
	};
}

export default Damage;
