import React, { Component } from "react";
import { View, FlatList } from "react-native";
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
import Thumb from "../Thumb/Thumb";
import moment from "moment/min/moment-with-locales";
const mapStateToProps = state => {
  return {};
};
class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    moment.locale("ko");
  }
  render() {
    const { content, size, createdAt } = this.props;
    return (
      <View style={styles.comment}>
        <Thumb size={30} />
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>
        <View style={styles.createdAt}>
          <Text>{moment(createdAt).fromNow()}</Text>
        </View>
      </View>
    );
  }
}

export default (CommentList = connect(mapStateToProps)(CommentList));
