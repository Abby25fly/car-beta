
import React, { Component } from "react";
import './Result.css';
const Result = () => (
  <div className="container">
  <Col xs={6} md={4} id="card">
  <Thumbnail src="https://rightindem.com/wp-content/themes/HTML5-Reset-WordPress-Theme-master/images/icon-insurer.png" alt="242x200">
    <h3 id="name">Name's client</h3>
    <p id="info-card">Description</p>
    <p>
      <Button bsStyle="primary">Atrás</Button>&nbsp;
      <Button bsStyle="default">Adelante</Button>
    </p>
  </Thumbnail>
</Col>
</div>
  );
  


const BtnCall = ()=>(
    <div className="well" id="btnNext">
    
    <Button bsSize="large" block>Llamar</Button>
  </div>

);

const BtnNext = ()=>(
    <div className="well" id="btnNext">
    
    <Button bsSize="large" block>Siguiente</Button>
  </div>

);



