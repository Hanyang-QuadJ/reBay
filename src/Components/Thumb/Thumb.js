import React, { Component } from "react";
import { View, Image } from "react-native";
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
class Thumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { size } = this.props;
    return (
      <View style={styles.thumb}>
        <Image
          style={{ width: size, height: size, borderRadius: size / 2 }}
          source={require("../../Assets/yoon.png")}
        />
      </View>
    );
  }
}

export default (Thumb = connect(mapStateToProps)(Thumb));
