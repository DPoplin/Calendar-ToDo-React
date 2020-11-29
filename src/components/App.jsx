import React, {useState} from "react";
import Calendar from "./Calendar.jsx";
import Quote from "./Quote.jsx";
import Schedule from "./Schedule";
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css';
import "../index.css";

const options = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
const today = new Date().toLocaleDateString("en-us", options);



function App() {
  return (
    <Container fluid>
    <div className="App">
      <header className="App-header">
      <Row>
      <Col>
      <h1>{today}</h1>
      </Col>
      </Row>
      <Row>
      <Col>
      <Quote />
      </Col>
      </Row>
      <Row>
      <Col xs={12} s={12} md={8} lg={8} xl={8}>
      <Calendar />
      </Col>
      <Col xs={12} s={9} md={4} lg={4} xl={4}>
      <Schedule />
      </Col>
      </Row>
      </header>
    </div>
    </Container>
  );
}

export default App;
