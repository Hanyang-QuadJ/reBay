import React, { Component, PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Input,
  Left,
  Body,
  Right,
  Button,
  Text,
  Icon,
  Title
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
import FastImage from "react-native-fast-image";
const mapStateToProps = state => {
  return {};
};
class List extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress, isPic, content, image } = this.props;
    return (
      <View style={styles.option}>
        <TouchableOpacity style={styles.option_wrapper} onPress={onPress}>
          <View>
            {isPic ? (
              <FastImage
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            ) : (
              <Icon style={styles.option__icon} name="ios-settings" />
            )}
          </View>
          <Text style={styles.option__text}>{content}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default (List = connect(mapStateToProps)(List));
