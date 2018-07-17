import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager
} from "react-native";
import { Container, Content, Icon, Text } from "native-base";
import styles from "./style";
import CommentList from "../../Components/CommentList/CommentList";
import * as LogAction from "../../Actions/LogAction";
import * as ItemAction from "../../Actions/ItemAction";
import * as HelpAction from "../../Actions/HelpAction";
import * as commonStyle from "../../Constants/commonStyle";
import { GoToHome } from "../index";

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token
  };
};

class HelpOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      help: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    // console.log(this.props.item);
    const params = { props: this.props };
    // this.props.dispatch(LogAction.readLog(params));
    this.props.dispatch(HelpAction.getHelpByHelpId(params)).then(result => {
      this.setState({
        help: result.help
      });
    });
  }

  async componentDidMount() {}

  render() {
    const { help } = this.state;
    return (
      <View>
        {/* <CommentList
          answer={help && help.answer}
          seller={help && help.seller}
          content={help && help.ask}
          createdAt={help && help.time}
          createdAtAns={help && help.time_ans}
          src={help && help.user.profile_img}
        /> */}
        <Text>제목 : {help && help.ask}</Text>
        <Text>답변 : {help && help.answer}</Text>
        <Text>질문시간 : {help && help.time}</Text>
        <Text>답변시간 : {help && help.time_ans}</Text>

        <Text>질문자 : {help && help.user_id}</Text>
        <Text>답변자 : {help && help.seller_id}</Text>
      </View>
    );
  }
}

export default (HelpOneScreen = connect(mapStateToProps)(HelpOneScreen));
