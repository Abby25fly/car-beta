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
      fdl:'',
      fdr:'',
      roof:'',
      bdl:'',
      bdr:'',
      rw:'',
      bumper:''
    };
  }
  select(e){
    
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
              <div className='box' onClick={this.select}>Front</div>
            </div>
            <div className='two col-md-12'>
              <div className='box' onClick={this.select}>Front Wing Left</div>
              <div className='box' onClick={this.select}>Front Wing Right</div>
            </div>
            <div className='one col-md-12'>
              <div className='box' onClick={this.select}>Bonnet</div>
            </div>
            <br/>
            <div className='one col-md-12'>
              <div className='box' onClick={this.select}>Windscreen</div>
            </div>
            <br/>
            <div className='two col-md-12'>
              <div className='box' onClick={this.select}>Front Door Left</div>
              <div className='box' onClick={this.select}>Front Door Right</div>
            </div>
            <div className='one col-md-12'>
              <div className='box' onClick={this.select}>Roof</div>
            </div>
            <div className='two col-md-12'>
              <div className='box' onClick={this.select}>Back Door Left</div>
              <div className='box' onClick={this.select}>Back Door Right</div>
            </div>
            <br/><br/>
            <div className='one col-md-12'>
              <div className='box' onClick={this.select}>Rear Window</div>
            </div>
            <div className='two col-md-12'>
              <div className='box' onClick={this.select}>Tail Left</div>
              <div className='box' onClick={this.select}>Bumper</div>
              <div className='box' onClick={this.select}>Tail Right</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
