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
    token: state.LoginReducer.token
  };
};

class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      unSelled: [],
      comment: ""
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const params = { props: this.props };
    this.setState({ isLoading: true });
    this.props.dispatch(UserAction.getUnSelledList(params)).then(list => {
      this.setState({ unSelled: list.items, isLoading: false });
    });
  }

  componentDidMount() {
    // this.flatList.scrollToEnd();
  }

  render() {
    const { unSelled, isLoading } = this.state;
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
            scrollEventThrottle={1}
            ref={ref => (this.flatList = ref)}
            onContentSizeChange={() =>
              this.flatList.scrollToEnd({ animated: true })
            }
            onLayout={() => this.flatList.scrollToEnd({ animated: false })}
            keyExtractor={this._keyExtractor}
            data={unSelled}
            renderItem={this._renderItem}
          />
        )}

        <View style={styles.inputArea}>
          <Thumb size={40} />
          <TextInput
            autoFocus
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
    <CommentList content={item.item_name} createdAt={item.time} />
  );

  handleInput = text => {
    this.setState({ comment: text });
  };

  handleSubmit = () => {
    const newComments = this.state.unSelled.slice();
    const frontParams = {
      id: newComments[newComments.length - 1].id + 1,
      item_name: this.state.comment,
      time: new Date()
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
    console.log(params);
    this.props.dispatch(ItemAction.askItem(params)).then(value => {
      this.setState({ unSelled: newComments });
    });
  };
}

export default (HelpScreen = connect(mapStateToProps)(HelpScreen));
