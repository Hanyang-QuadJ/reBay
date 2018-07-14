import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
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
    const {
      content,
      size,
      createdAt,
      createdAtAns,
      src,
      seller,
      answer,
      isAnswer,
      isCommentLoading,
      isReplyLoading,
      onPressReply
    } = this.props;
    return (
      <View style={styles.comment}>
        <View style={styles.commentMain}>
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
        <View style={styles.commentReply}>
          <TouchableOpacity onPress={onPressReply}>
            {answer === null && isAnswer ? (
              <Text style={styles.commentReply__text}>답변하기</Text>
            ) : null}
          </TouchableOpacity>
          {answer === null ? null : (
            <View style={styles.commentNested}>
              <Thumb size={30} src={seller && seller.profile_img} />
              <View style={styles.contentNested}>
                {isReplyLoading ? (
                  <Text style={styles.comment__loadingText}>게시중...</Text>
                ) : (
                  <Text style={styles.comment__text}>{answer}</Text>
                )}
              </View>
              <View style={styles.createdAt}>
                <Text style={styles.comment__createdAt}>
                  {moment(createdAtAns).fromNow()}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default (CommentList = connect(mapStateToProps)(CommentList));
