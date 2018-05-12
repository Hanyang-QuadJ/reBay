import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

const mapStateToProps = state => {
  return {};
};

class BuyScreen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  render() {
    console.log(this.props.item);
    return <Container style={{ backgroundColor: "white" }} />;
  }
}
export default (BuyScreen4 = connect(mapStateToProps)(BuyScreen4));
