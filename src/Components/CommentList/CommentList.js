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
import { SwipeRow } from "react-native-swipe-list-view";
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

  renderHelp = () => {
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
      onPressReply,
      onPressDeleteMain
    } = this.props;
    if (!isAnswer) {
      return (
        <SwipeRow rightOpenValue={-70} disableRightSwipe>
          <View style={styles.commentMainBack}>
            <TouchableOpacity
              style={styles.commentDeleteIcon}
              onPress={onPressDeleteMain}
            >
              <Icon
                name="ios-trash-outline"
                size={20}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          </View>
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
        </SwipeRow>
      );
    } else {
      return (
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
      );
    }
  };

  renderReply = () => {
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
    if (isAnswer) {
      return (
        <SwipeRow rightOpenValue={-70} disableRightSwipe>
          <View style={styles.commentNestedBack}>
            <TouchableOpacity style={styles.commentDeleteIcon}>
              <Icon
                name="ios-trash-outline"
                size={20}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.commentNested}>
            <Thumb
              size={30}
              src={seller && seller.profile_img}
              style={{ marginLeft: 65 }}
            />
            <View style={styles.contentNested}>
              {isReplyLoading ? (
                <Text style={styles.comment__loadingText}>게시중...</Text>
              ) : (
                <Text style={styles.comment__text}>{answer}</Text>
              )}
            </View>
            <View style={styles.createdAtNested}>
              <Text style={styles.comment__createdAt}>
                {moment(createdAtAns).fromNow()}
              </Text>
            </View>
          </View>
        </SwipeRow>
      );
    } else {
      return (
        <View style={styles.commentNested}>
          <Thumb
            size={30}
            src={seller && seller.profile_img}
            style={{ marginLeft: 65 }}
          />
          <View style={styles.contentNested}>
            {isReplyLoading ? (
              <Text style={styles.comment__loadingText}>게시중...</Text>
            ) : (
              <Text style={styles.comment__text}>{answer}</Text>
            )}
          </View>
          <View style={styles.createdAtNested}>
            <Text style={styles.comment__createdAt}>
              {moment(createdAtAns).fromNow()}
            </Text>
          </View>
        </View>
      );
    }
  };

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
        {this.renderHelp()}
        <View style={styles.commentReply}>
          <TouchableOpacity onPress={onPressReply}>
            {answer === null && isAnswer ? (
              <Text style={styles.commentReply__text}>답변하기</Text>
            ) : null}
          </TouchableOpacity>
          {answer === null ? null : this.renderReply()}
        </View>
      </View>
    );
  }
}

export default (CommentList = connect(mapStateToProps)(CommentList));
