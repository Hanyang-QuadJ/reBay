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
import * as commonStyle from "../../../Constants/commonStyle";
import styles from "./style";
import * as LogAction from "../../../Actions/LogAction";
import {
  Container,
  Content,
  Icon,
  Button,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Text
} from "native-base";

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token
  };
};

class NoticeScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;
  constructor(props) {
    super(props);
    this.state = {
      logsById: [],
      isRefreshing: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // IOS
  }
  async componentDidMount() {
    const params = { props: this.props /*body: {asdf: asdf}*/ };

    this.props.dispatch(LogAction.getLogs(params)).then(log => {
      this.setState({
        logsById: log
      });
    });
  }
  render() {
    const { logsById, isRefreshing } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          refreshing={isRefreshing}
          scrollEventThrottle={1}
          onRefresh={this.handleRefresh}
          keyExtractor={this._keyExtractor}
          data={logsById}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <ListItem
      button={true}
      onPress={() => this.handleHelpOne(item)}
      style={styles.option_wrapper}
    >
      <Text>{item.message}</Text>
    </ListItem>
  );

  handleHelpOne = item => {
    this.props.navigator.push({
      screen: "HelpOne",
      passProps: {
        item
      }
    });
  };

  handleRefresh = () => {
    const params = { props: this.props /*body: {asdf: asdf}*/ };
    this.setState({ isRefreshing: true });
    this.props.dispatch(LogAction.getLogs(params)).then(log => {
      this.setState({
        logsById: log,
        isRefreshing: false
      });
    });
  };
}

export default (NoticeScreen = connect(mapStateToProps)(NoticeScreen));
