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
    const { size, src, style } = this.props;
    return (
      <View style={[styles.thumb, style]}>
        <Image
          style={{ width: size, height: size, borderRadius: size / 2 }}
          source={{ uri: src }}
        />
      </View>
    );
  }
}

export default (Thumb = connect(mapStateToProps)(Thumb));
