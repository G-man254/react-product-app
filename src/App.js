// src/App.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css";

const firstName = "G-man"; 

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-lg">
            {/*Holds the components*/}
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>

          <div className="mt-4 w-100">
            <h5 className="text-center">Hello, {firstName ? firstName : "there"}!</h5>
            {firstName && (
              <img
                src="/images/headset1.jpg"
                alt="JBL heeadset"
                className="headset-image mt-2 mx-auto"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
