import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
  ScrollView
} from "react-native";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";

import { Container, Content, Icon } from "native-base";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import * as BasketAction from "../../Actions/BasketAction";
import { GoToHome } from "../index";

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token,
    isLogin: state.LoginReducer.isLogin
  };
};

class BasketScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baskets: [],
      isLoading: true
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const { token } = this.props;
    const params = { token, props: this.props };
    this.props
      .dispatch(BasketAction.getBaskets(params))
      .then(baskets => this.setState({ baskets, isLoading: false }));
  }

  render() {
    const { baskets, isLoading } = this.state;
    return (
      <ScrollView contentContainerStyle={isLoading ? { flex: 1 } : null}>
        {isLoading ? (
          <LoadingActivity />
        ) : (
          <CategoryItem
            isInner
            item={baskets}
            screen="HomeItem"
            navigator={this.props.navigator}
          />
        )}
      </ScrollView>
    );
  }
}

export default (BasketScreen = connect(mapStateToProps)(BasketScreen));
