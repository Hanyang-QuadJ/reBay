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
  KeyboardAvoidingView
} from "react-native";
import { Container, Content, Icon, Input, Item } from "native-base";
import Thumb from "../../Components/Thumb/Thumb";
import * as UserAction from "../../Actions/UserAction";
import * as ItemAction from "../../Actions/ItemAction";
import CommentList from "../../Components/CommentList/CommentList";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import { GoToHome } from "../index";
const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
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
      help: [],
      comment: ""
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
      this.props.dispatch(ItemAction.getMyHelpByItemId(params)).then(help => {
        //add loading state to each help
        let result = help.map(function(el) {
          let o = Object.assign({}, el);
          o.loading = false;
          return o;
        });
        this.setState({ help: result, isLoading: false });
      });
    } else {
      this.props.dispatch(ItemAction.getHelpByItemId(params)).then(help => {
        this.setState({ help, isLoading: false });
      });
    }
  }

  componentDidMount() {
    // this.flatList.scrollToEnd();
  }

  render() {
    const { help, isLoading } = this.state;
    const { me } = this.props;
    console.log(help);
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
        enabled
      >
        {isLoading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <LoadingActivity />
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{ marginTop: 10 }}
            scrollEventThrottle={1}
            ref={ref => (this.flatList = ref)}
            onContentSizeChange={() =>
              this.flatList.scrollToEnd({ animated: true })
            }
            onLayout={() => this.flatList.scrollToEnd({ animated: false })}
            keyExtractor={this._keyExtractor}
            data={help}
            renderItem={this._renderItem}
          />
        )}

        <View style={styles.inputArea}>
          <Thumb size={40} src={me.profile_img} />
          <TextInput
            autoFocus
            multiline
            placeholder="문의 사항을 입력하세요"
            ref={ref => {
              this.myTextInput = ref;
            }}
            style={styles.input}
            onChangeText={this.handleInput}
            onSubmitEditing={this.handleSubmit}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.postButton}>게시</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <CommentList
      isCommentLoading={item.loading}
      content={item.ask}
      createdAt={item.time}
      src={item.user.profile_img}
    />
  );

  handleInput = text => {
    this.setState({ comment: text });
  };

  handleSubmit = () => {
    const { me } = this.props;
    const newComments = this.state.help.slice();
    const frontParams = {
      id:
        newComments.length === 0
          ? 0
          : newComments[newComments.length - 1].id + 1,
      ask: this.state.comment,
      time: new Date(),
      user: { profile_img: me.profile_img },
      loading: true
    };
    newComments.push(frontParams);
    const params = {
      props: this.props,
      body: {
        ask: this.state.comment,
        seller_id: this.props.user_id,
        item_id: this.props.item_id
      }
    };
    this.flatList.scrollToEnd();
    this.setState({ help: newComments });
    this.props.dispatch(ItemAction.askItem(params)).then(value => {
      newComments[newComments.length - 1].loading = false;
      this.setState({ help: newComments });
    });
  };
}

export default (HelpScreen = connect(mapStateToProps)(HelpScreen));
