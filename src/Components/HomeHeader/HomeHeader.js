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
  Title
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {};
};
class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View />;
  }
}

export default (HomeHeader = connect(mapStateToProps)(HomeHeader));
