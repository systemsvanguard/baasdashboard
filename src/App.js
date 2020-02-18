import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Table4Chart from './components/Table4Chart';
import FinProdBarGraph01 from './components/FinProdBarGraph01';
import PieChart01 from './components/PieChart01';

import FinProdBarGraph02 from './components/FinProdBarGraph02';
import Table4DualMonth from './components/Table4DualMonth';

class App extends Component {
  render() {
    return (
      <Container className="App" fluid={true}>
      <br /><br />
      <h2 style={{color: "#ed0722", textAlign: "center", fontWeight: "bold" }}>
        Financial Products Dashboard
      </h2>
      <br /><br />
        <Row>
          <Col xs="6" className="text-md-center text-xs-right">
            <FinProdBarGraph01 />
          </Col>
          <Col xs="6">
            <PieChart01 />
          </Col>
        </Row>
        <Row>
          <Col>
          <br /><br />
          <Table4Chart />
          <br /> <br /><br />
          </Col>
        </Row>
        <Row>
          <Col xs="5" className="text-md-center text-xs-right">
            <h3>Multi Month - Bar Chart</h3>
            <FinProdBarGraph02 />
          </Col>
          <Col xs="7">
            <Table4DualMonth />
            <br /><br /> 
          </Col>
        </Row>

        <Row>
          <Col>
          <br /><br /><br /> 
          </Col>
        </Row>
    </Container>
    );
  }
}

export default App;
