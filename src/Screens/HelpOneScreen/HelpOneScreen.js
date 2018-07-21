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
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
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
      help: [],
      isLoading: true
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
        help: result.help,
        isLoading: false
      });
    });
  }

  async componentDidMount() {}

  render() {
    const { item } = this.props;
    const { help, isLoading } = this.state;
    return (
      <Container>
        <Content
          contentContainerStyle={
            isLoading
              ? { flex: 1, backgroundColor: "white" }
              : { backgroundColor: "white" }
          }
        >
          {isLoading ? (
            <LoadingActivity />
          ) : (
            <CommentList
              isAnswer={false}
              help={help && help}
              type={item.type}
            />
          )}
        </Content>
      </Container>
    );
  }
}

export default (HelpOneScreen = connect(mapStateToProps)(HelpOneScreen));
