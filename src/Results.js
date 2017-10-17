import React, { Component } from "react";
import DataInfo from './datainfo';
import {Col,Thumbnail,Glyphicon,Button} from 'react-bootstrap';
import './Result.css';
import {
  NavLink
} from "react-router-dom";

class Results extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        completed: false
      }
      this.userInfo = {
        phone: '+32 978 888 444'
      }
    }
    showDetails()
    {
      let obj = DataInfo.DetailInsurance[this.props.info.typeDamage];
      return <div>
        <h2>Tipo de daño</h2>
        <h4 className='user-info'>{obj.nameDamage}({obj.damage})</h4>
        <h3>Su seguro puede hacer lo siguiente: </h3>
        <p className='user-info'>{obj.description}</p>
        <h4>Y puede brindarle las siguientes soluciones:</h4>
        <ul className='user-info'>
          {
            obj.solutions.map((item,index)=>{
              return <li key={index}>{DataInfo.Solutions[item]}</li>
            })
          }
        </ul>

      </div>
    }
    render(){
      
      const BtnCall = () => (
          <NavLink to={'/map'} className="btn btn-block">Llamar</NavLink>
      );
      return (<div className="container">
                <Col xs={10} md={4} id="card">
                  <Thumbnail src="https://seguroviajero.lapositiva.com.pe/app/assets/icons/logo-la-positiva.png" alt="800x600">
                    <h1 id="name">Estimado usuario: {this.props.info.user}</h1>
                    
                    <p>
                      {this.showDetails()}
                    </p>
                  </Thumbnail>
                    <BtnCall/>
                </Col>
              </div>)
      }  
// const DataProcessEnough = () => (
//   <div className="container">
//     <Col xs={6} md={4} id="card">
//       <Thumbnail src="../public/avatar.png" alt="242x200">
//         <h3 id="name">Name's client</h3>
//         <p id="info-card">Description</p>
//       </Thumbnail>
//       <div>
//         <Button id="btnNext"><i><Glyphicon glyph="earphone" /></i></Button>
//       </div>
//     </Col>
//   </div>);

// const DataProcessCorrect = () => (
//   <div className="container">
//     <Col xs={6} md={4} id="card">
//       <Thumbnail src="../public/avatar.png">
//         <h3 id="name">Name's client</h3>
//         <p id="info-card">Description</p>

//         <div className="well">

//           <Button id="btnNext" bsSize="large" block>Confirmar</Button>
//         </div>

//       </Thumbnail>
//     </Col>
//   </div>
// );




// const BtnNext = () => (
//   <div className="well" id="btnNext">

//     <Button bsSize="large" block>Siguiente</Button>
//   </div>

// );

}  
export default Results;