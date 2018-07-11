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
    const { content, size, createdAt, src, isCommentLoading } = this.props;
    return (
      <View style={styles.comment}>
        <Thumb size={30} src={src} />
        <View style={styles.content}>
          {isCommentLoading ? (
            <Text style={styles.comment__loadingText}>게시중...</Text>
          ) : (
            <Text style={styles.comment__text}>{content}</Text>
          )}
        </View>
        <View style={styles.createdAt}>
          <Text style={styles.comment__createdAt}>
            {moment(createdAt).fromNow()}
          </Text>
        </View>
      </View>
    );
  }
}

export default (CommentList = connect(mapStateToProps)(CommentList));
