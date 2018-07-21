import React, { Component } from "react";
import { connect } from "react-redux";
import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList
} from "react-native-keyboard-aware-scroll-view";
import {
  AsyncStorage,
  View,
  Text,
  FlatList,
  TextInput,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { Container, Content, Icon, Input, Item } from "native-base";
import Thumb from "../../Components/Thumb/Thumb";
import * as UserAction from "../../Actions/UserAction";
import * as HelpAction from "../../Actions/HelpAction";
import CommentList from "../../Components/CommentList/CommentList";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import { GoToHome } from "../index";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
const keyboardVerticalOffset = Platform.OS === "ios" ? 65 : 0;
const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me,
    token: state.LoginReducer.token
  };
};

class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isInputHide: false,
      isReplying: false,
      replyName: "",
      replyIndex: 0,
      help: [],
      comment: "",
      height: 60
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const { isMe } = this.props;
    const params = { props: this.props };
    if (isMe) {
      this.props.dispatch(HelpAction.getMyHelpByItemId(params)).then(help => {
        //add loading state to each help
        let result = help.map(function(el) {
          let o = Object.assign({}, el);
          o.loading = false;
          o.replyLoading = false;
          return o;
        });
        this.setState({ help: result, isLoading: false });
      });
    } else {
      this.props.dispatch(HelpAction.getHelpByItemId(params)).then(help => {
        this.setState({ help, isLoading: false });
      });
    }
  }

  componentDidMount() {
    const { isLoading } = this.state;
    if (isLoading === false) {
      console.log(this.flatList);
    }
  }

  render() {
    const {
      help,
      isLoading,
      isReplying,
      height,
      comment,
      isInputHide,
      replyName
    } = this.state;
    const { me, isMe } = this.props;
    let newStyle = {
      height
    };
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white"
        }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
        enabled
      >
        {isLoading && help.length === 0 ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <LoadingActivity />
          </View>
        ) : (
          <FlatList
            inverted
            contentContainerStyle={{ marginVertical: 10 }}
            scrollEventThrottle={1}
            ref={ref => (this.flatList = ref)}
            // onContentSizeChange={() =>
            //   isReplying ? null : this.flatList.scrollToEnd({ animated: true })
            // }
            onLayout={this.onLayout}
            keyExtractor={this._keyExtractor}
            data={help}
            keyboardShouldPersistTaps={"handled"}
            keyboardDismissMode="interactive"
            renderItem={this._renderItem}
          />
        )}
        <View style={[styles.inputArea]}>
          {isReplying ? (
            <View style={styles.inputReply}>
              <Text
                style={styles.inputReplyText}
              >{`${replyName}님 에게 답변 하는 중`}</Text>
            </View>
          ) : null}
          <View style={styles.inputMain}>
            <Thumb size={40} src={me.profile_img} />
            <View style={styles.inputContainer}>
              <TextInput
                autoFocus={isMe ? true : false}
                ref={input => {
                  this.commentInput = input;
                }}
                placeholder={
                  !isMe ? "답변 내용을 입력하세요" : "문의 사항을 입력하세요"
                }
                onChangeText={value => this.setState({ comment: value })}
                style={[newStyle, styles.input]}
                editable={true}
                multiline={true}
                value={comment}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onContentSizeChange={e =>
                  this.updateSize(e.nativeEvent.contentSize.height)
                }
              />
            </View>
            <TouchableOpacity
              style={styles.postButton}
              onPress={this.handleSubmit}
            >
              <Text style={styles.postButtonText}>게시</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  onLayout = () => {
    const { isMe } = this.props;
    let wait = new Promise(resolve => setTimeout(resolve, 200));

    // if (isMe) {
    //   this.commentInput.focus();
    //   wait.then(() => {
    //     this.flatList.scrollToEnd({ animated: false });
    //   });
    // } else {
    //   wait.then(() => {
    //     this.flatList.scrollToEnd({ animated: false });
    //   });
    // }
  };

  updateSize = height => {
    this.setState({
      height
    });
  };

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item, index }) => (
    <CommentList
      help={item}
      isAnswer={!this.props.isMe}
      isCommentLoading={item.loading}
      isReplyLoading={item.replayLoading}
      onPressReply={() => this.handleReply(item.user.username, index)}
      onPressDeleteMain={() => this.handleDeleteMain(item, index)}
    />
  );

  handleFocus = () => {};

  handleBlur = () => {
    this.setState({ isReplying: false });
  };

  handleReply = async (name, index) => {
    let wait = new Promise(resolve => setTimeout(resolve, 200));
    this.commentInput.focus();
    this.setState({
      isReplying: true,
      replyName: name,
      replyIndex: index
    });
    wait.then(() => {
      this.flatList.scrollToIndex({
        animated: false,
        index,
        viewPosition: 1
      });
    });
  };

  handleDeleteMain = (item, index) => {
    const newHelp = this.state.help.slice();
    const removeIndex = newHelp
      .map((data, index) => {
        return data.id;
      })
      .indexOf(item.id);
    newHelp.splice(removeIndex, 1);
    this.setState({ help: newHelp });
    const params = { props: this.props, help_id: item.id };
    this.props.dispatch(HelpAction.deleteHelp(params)).then(value => {
      console.log(value);
    });
  };

  handleSubmit = () => {
    const { isReplying, replyIndex } = this.state;
    if (isReplying) {
      const { me } = this.props;
      const newComments = this.state.help.slice();
      newComments[replyIndex].answer = this.state.comment;
      newComments[replyIndex].time_ans = new Date();
      newComments[replyIndex].replayLoading = true;
      const help_id = newComments[replyIndex].id;
      const params = {
        props: this.props,
        body: { help_id, answer: this.state.comment }
      };
      let wait = new Promise(resolve => setTimeout(resolve, 200));
      this.setState({ help: newComments, isReplying: false });
      wait.then(() => {
        this.flatList.scrollToIndex({
          animated: false,
          index: replyIndex,
          viewPosition: 1
        });
        this.props.dispatch(HelpAction.postAnswer(params)).then(value => {
          newComments[replyIndex].replayLoading = false;
          this.setState({ help: newComments, comment: "" });
        });
      });
    } else {
      const { me } = this.props;
      const newComments = this.state.help.slice();
      const frontParams = {
        id:
          newComments.length === 0
            ? 0
            : newComments[newComments.length - 1].id + 1,
        ask: this.state.comment,
        answer: null,
        time: new Date(),
        user: { profile_img: me.profile_img, username: me.username },
        loading: true
      };
      newComments.push(frontParams);
      // newCo.splice(0, 0, frontParams);
      const params = {
        props: this.props,
        body: {
          ask: this.state.comment,
          seller_id: this.props.user_id,
          item_id: this.props.item_id
        }
      };
      this.setState({ help: newComments });
      // let wait = new Promise(resolve => setTimeout(resolve, 200));
      // wait.then(() => {
      //   this.flatList.scrollToEnd({ animated: true });
      //   // this.flatList.scrollToIndex({
      //   //   animated: true,
      //   //   index: newComments.length - 1,
      //   //   viewPosition: 1
      //   // });
      // });
      this.props.dispatch(HelpAction.askItem(params)).then(value => {
        newComments[newComments.length - 1].loading = false;
        this.setState({ help: newComments, comment: "" });
      });
    }
  };
}

export default (HelpScreen = connect(mapStateToProps)(HelpScreen));
