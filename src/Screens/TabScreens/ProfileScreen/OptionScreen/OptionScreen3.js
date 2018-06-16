import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager
} from "react-native";
import { Container, Content, Icon } from "native-base";
import styles from "./style";
import * as commonStyle from "../../../../Constants/commonStyle";
import List from "../../../../Components/List/List";
import * as UserAction from "../../../../Actions/UserAction";
import { GoToHome } from "../../../index";

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token
  };
};

class OptionScreen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unSelled: [],
      selled: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const params = { props: this.props };
    this.props.dispatch(UserAction.getUnSelledList(params)).then(list => {
      this.setState({ unSelled: list.items });
    });
    // this.props.dispatch(UserAction.getSellList(params)).then(result => {
    //   console.log(result);
    //   this.props.dispatch(UserAction.getUnSelledList(params)).then(list => {
    //     console.log(list);
    //     this.setState({ selled: result.result, unSelled: list.items });
    //   });
    // });
  }

  render() {
    const { selled, unSelled } = this.state;
    console.log(unSelled);
    return (
      <View>
        <FlatList
          scrollEventThrottle={1}
          keyExtractor={this._keyExtractor}
          data={unSelled}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <List isPic content={item.item_name} image={item.image.image_url} />
  );
}

export default (OptionScreen3 = connect(mapStateToProps)(OptionScreen3));
