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
  NavLink
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
  constructor(props){
    super(props);
    this.desc=null;
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
  saveInfo(){
    if(this.state.uno!='')
      this.props.info.typeDamage =0;
    else if(this.state.dos!='')
      this.props.info.typeDamage =1;
    else if(this.state.tres!='')
      this.props.info.typeDamage =2;
    else if(this.state.cuatro!='')
      this.props.info.typeDamage =3;
    else if(this.state.cinco!='')
      this.props.info.typeDamage =4;
    else if(this.state.seis!='')
      this.props.info.typeDamage =5;

    this.props.info.description=this.desc;

  }
  render() {
    return (
      <div>
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
        <div className="row form-group">
          <label for="comment">Descripción:</label>
          <textarea className="form-control descrip" onChange={(e)=>this.desc=e.target.value}id="comment"></textarea>
        </div>
        <div>
          <NavLink to={"/showparts"} onClick={()=>this.saveInfo()} className="btn btn-lg btn-block btn-battle">Siguiente</NavLink>
        </div>
      </div>
    );
  }
}

class Damage extends Component{
  constructor(props){
    super(props);
  }
	render () {
		return(
			<div className="container">
            <NavbarHome/>
            <hr/>
            <TitleHome/>
            <br/>
            <Images info={this.props.info}/>
      </div>
		);
	};
}

export default Damage;
