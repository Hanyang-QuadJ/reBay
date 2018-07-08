import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {};
};
class RoundButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button
        full
        rounded
        onPress={this.props.onPress}
        style={{
          backgroundColor: this.props.backgroundColor,
          height: 45,
          marginTop: 40,
          marginLeft: 45,
          marginRight: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 50
        }}
      >
        <Text style={{ color: this.props.textColor }}>{this.props.text}</Text>
      </Button>
    );
  }
}

export default (RoundButton = connect(mapStateToProps)(RoundButton));
