import React, { Component } from "react";
import './Result.css';

const DataProcessEnough = () => (
  <div className="container">
    <Col xs={6} md={4} id="card">
      <Thumbnail src="public/avatar.png" alt="242x200">
        <h3 id="name">Name's client</h3>
        <p id="info-card">Description</p>
      </Thumbnail>
      <div>
        <Button id="btnNext"><i><Glyphicon glyph="earphone" /></i></Button>
      </div>
    </Col>
  </div>);


const DataProcessCorrect = () => (
  <div className="container">
    <Col xs={6} md={4} id="card">
      <Thumbnail src="https://rightindem.com/wp-content/themes/HTML5-Reset-WordPress-Theme-master/images/icon-claims-manager.png" alt="242x200">
        <h3 id="name">Name's client</h3>
        <p id="info-card">Description</p>

        <div className="well">

          <Button id="btnNext" bsSize="large" block>Confirmar</Button>
        </div>

      </Thumbnail>
    </Col>
  </div>
);



const BtnCall = () => (
  <div className="well" id="btnNext">

    <Button bsSize="large" block>Llamar</Button>
  </div>

);

const BtnNext = () => (
  <div className="well" id="btnNext">

    <Button bsSize="large" block>Siguiente</Button>
  </div>

);



