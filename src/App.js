import React from "react";

import Profilepic from "./img/Boss.jpg";

// scss
import "./css/main.css";

// layout
import { Container, Row, Col } from "reactstrap";

// components
import { Component } from "react";

import { Button } from "reactstrap";

import User from "./User";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
        <Container>
          <Row className="rows">
            <Col sm={4} className="columns1">
              <img src={Profilepic} className="Profilepic" alt="profile" />
            </Col>
            <Col sm={8} className="columns2">
              <h2>May I introduce myself</h2>
            </Col>
          </Row>
          <Row className="rows">
            <Col sm={4} className="columns3">
              <form onSubmit={this.handleSubmit}>
                <Button
                  onClick={() => this.props.setName("My Nickname is Boss")}
                  outline
                  color="success"
                >
                  Mores
                </Button>
              </form>
            </Col>
            <Col sm className="columns4">
              <User username={this.props.user.name} />
            </Col>
          </Row>
        </Container>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDitpatchtoProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name,
      });
    },
  };
};
export default connect(mapStatetoProps, mapDitpatchtoProps)(App);
