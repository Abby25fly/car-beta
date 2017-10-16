import React, { Component } from 'react';
import './App.css';

class Parts extends Component {
  constructor(props){
    super(props);
    this.state={
      fr:'',
      fwl:'',
      fwr:'',
      bonnet:'',
      ws:'',
      fdl:'',
      fdr:'',
      roof:'',
      bdl:'',
      bdr:'',
      rw:'',
      bumper:'',
      tl:'',
      tr:''
    };
  }
  select(e){
    e.sele

  }
  render() {
    return (
      <div className="container text-center">
        <div className='row'>
          <div className='col-md-12'><h2>Select Area(s) of Damage</h2></div>
        </div>
        <div className='row'>
          <div className='s-car'>
            <div className='one col-md-12'>
              <div className={'box'+this.state.fr} onClick={this.select}>Frente</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box'+this.state.fwl} onClick={this.select}>Ala Izquierda</div>
              <div className={'box'+this.state.fwr} onClick={this.select}>Ala Derecha</div>
            </div>
            <div className='one col-md-12'>
              <div className={'box'+this.state.bonnet} onClick={this.select}>Capot</div>
            </div>
            <br/>
            <div className='one col-md-12'>
              <div className={'box'+this.state.ws} onClick={this.select}>Parabrisas</div>
            </div>
            <br/>
            <div className='two col-md-12'>
              <div className={'box'+this.state.fdl} onClick={this.select}>Puerta Delantera Izquierda</div>
              <div className={'box'+this.state.fdr} onClick={this.select}>Puerta Delantera Derecha</div>
            </div>
            <div className='one col-md-12'>
              <div className={'box'+this.state.roof} onClick={this.select}>Techo</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box'+this.state.bdl} onClick={this.select}>Puerta Trasera Izquierda</div>
              <div className={'box'+this.state.bdr} onClick={this.select}>Puerta Trasera Derecha</div>
            </div>
            <br/>
            <div className='one col-md-12'>
              <div className={'box'+this.state.rw} onClick={this.select}>Ventana Trasera</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box'+this.state.tl} onClick={this.select}>Cola Izquierda</div>
              <div className={'box'+this.state.bumper} onClick={this.select}>Maletero</div>
              <div className={'box'+this.state.tr} onClick={this.select}>Cola Derecha</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
