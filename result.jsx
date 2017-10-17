import React, { Component } from "react";
import './Data.jsx';
import './Result.css';

class FinalData extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        completed: false
      }
  
      this.userInfo = {
        phone: null
      }
    }
    
    Solutions.map(item => {
      return (<div className="container">
      <Col xs={6} md={4} id="card">
        <Thumbnail src="../public/avatar.png" alt="242x200">
          <h3 id="name">{extraer input del nombre del usuario}</h3>
          <p id="info-card">{item.mechanicService}</p>
        </Thumbnail>
        <div>
          <Button id="btnNext"><i><Glyphicon glyph="earphone" /></i></Button>
        </div>
      </Col>
    </div>);
      
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



// const BtnCall = () => (
//   <div className="well" id="btnNext">

//     <Button bsSize="large" block>Llamar</Button>
//   </div>

// );

// const BtnNext = () => (
//   <div className="well" id="btnNext">

//     <Button bsSize="large" block>Siguiente</Button>
//   </div>

// );

}  
export default FinalData;




    







