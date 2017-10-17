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
                    <div className="container">
                      <div className="row">
                        <div className="col-md-1 col-xs-1 text-center">
                            <a href="javascript:window.history.back();">
                                <i className="fa fa-chevron-left arrow" aria-hidden="true" />
                              </a>
                        </div>
                        <div className="col-md-10 col-xs-10 text-center">
                                <h1 className="titleCar">¿Qué paso?</h1>
                                <br />
                                <h4 className = "infoDamage">Elige una opción e ingresa la descripción</h4>
                            </div>                                
                        </div>
                    </div>
                </header>
            </div>
);
}}


class Images extends Component {
  constructor(props){
    super(props);
    this.state={
      uno:'',
      dos:'',
      tres:'',
      cuatro:'',
      cinco:'',
      seis:''
    };
  }
  select(e){
    if(e.target.id ==='uno')
      this.state.uno === ''?this.setState({uno:'selected'}):this.setState({uno:''})
    if(e.target.id ==='dos')
      this.state.dos === ''?this.setState({dos:'selected'}):this.setState({dos:''})
    if(e.target.id ==='tres')
      this.state.tres === ''?this.setState({tres:'selected'}):this.setState({tres:''})
    if(e.target.id ==='cuatro')
      this.state.cuatro === ''?this.setState({cuatro:'selected'}):this.setState({cuatro:''})
    if(e.target.id ==='cinco')
      this.state.cinco === ''?this.setState({cinco:'selected'}):this.setState({cinco:''})
    if(e.target.id ==='seis')
      this.state.seis === ''?this.setState({seis:'selected'}):this.setState({seis:''})
  }
  render() {
    return (
      
      <div className='container'>
        <center>
        <div className='row text-center'>
              <div className={'col-xs-4 image '+this.state.uno} onClick={(e)=>this.select(e)}><img className="img-responsive" id="uno" src={uno}/></div>
              <div className={'col-xs-4 image '+this.state.dos} onClick={(e)=>this.select(e)}><img className="img-responsive" id="dos" src={dos}/></div>
              <div className={'col-xs-4 image '+this.state.tres} onClick={(e)=>this.select(e)}><img className="img-responsive" id="tres" src={tres}/></div>
        </div>
        <div className='row text-center'>
              <div className={'col-xs-4 image '+this.state.cuatro} onClick={(e)=>this.select(e)}><img className="img-responsive" id="cuatro" src={cuatro}/></div>
              <div className={'col-xs-4 image '+this.state.cinco} onClick={(e)=>this.select(e)}><img className="img-responsive" id="cinco" src={cinco}/></div>
              <div className={'col-xs-4 image '+this.state.seis} onClick={(e)=>this.select(e)}><img className="img-responsive" id="seis" src={seis}/></div>              
        </div>
        </center>
        <div className="form-group textarea">
          <label for="comment">Descripción:</label>
          <textarea className="form-control descrip" id="comment"></textarea>
        </div>
        <div>
          <NavLink to={"/showparts"}	className="btn btn-lg btn-block btn-battle">Siguiente</NavLink>
        </div>
      </div>
      
    );
  }
}

class Damage extends Component{
	render () {
		return(
			<div className="container">
            <NavbarHome/>
            <br/>
            <Images/>
      </div>
		);
	};
}

export default Damage;
