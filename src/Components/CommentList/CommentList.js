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
      help,
      type,
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
            <Thumb size={30} src={help.user.profile_img} />
            <View style={styles.content}>
              {isCommentLoading ? (
                <Text style={styles.comment__loadingText}>게시중...</Text>
              ) : (
                <Text style={styles.comment__text}>{help.ask}</Text>
              )}
            </View>
            <View style={styles.createdAt}>
              <Text style={styles.comment__createdAt}>
                {moment(help.time).fromNow()}
              </Text>
            </View>
          </View>
        </SwipeRow>
      );
    } else {
      return (
        <View style={styles.commentMain}>
          <Thumb size={30} src={help.user.profile_img} />
          <View style={styles.content}>
            {isCommentLoading ? (
              <Text style={styles.comment__loadingText}>게시중...</Text>
            ) : (
              <Text style={styles.comment__text}>{help.ask}</Text>
            )}
          </View>
          <View style={styles.createdAt}>
            <Text style={styles.comment__createdAt}>
              {moment(help.time).fromNow()}
            </Text>
          </View>
        </View>
      );
    }
  };

  renderReply = () => {
    const {
      help,
      type,
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
              src={help.seller.profile_img}
              style={{ marginLeft: 65 }}
            />
            <View style={styles.contentNested}>
              {isReplyLoading ? (
                <Text style={styles.comment__loadingText}>게시중...</Text>
              ) : (
                <Text style={styles.comment__text}>{help.answer}</Text>
              )}
            </View>
            <View style={styles.createdAtNested}>
              <Text style={styles.comment__createdAt}>
                {moment(help.time_ans).fromNow()}
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
            src={help.seller.profile_img}
            style={{ marginLeft: 65 }}
          />
          <View style={styles.contentNested}>
            {isReplyLoading ? (
              <Text style={styles.comment__loadingText}>게시중...</Text>
            ) : (
              <Text style={styles.comment__text}>{help.answer}</Text>
            )}
          </View>
          <View style={styles.createdAtNested}>
            <Text style={styles.comment__createdAt}>
              {moment(help.time_ans).fromNow()}
            </Text>
          </View>
        </View>
      );
    }
  };

  render() {
    const {
      isAnswer,
      isCommentLoading,
      isReplyLoading,
      onPressReply,
      help,
      type
    } = this.props;
    return (
      <View style={styles.comment}>
        {this.renderHelp()}
        <View style={styles.commentReply}>
          <TouchableOpacity onPress={onPressReply}>
            {(help.answer === null && isAnswer) || type === 1 ? (
              <Text style={styles.commentReply__text}>답변하기</Text>
            ) : null}
          </TouchableOpacity>
          {help.answer === null ? null : this.renderReply()}
        </View>
      </View>
    );
  }
}

export default (CommentList = connect(mapStateToProps)(CommentList));
