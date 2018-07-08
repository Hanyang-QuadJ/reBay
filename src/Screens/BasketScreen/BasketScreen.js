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
      baskets: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentDidMount() {
    const { token } = this.props;
    const params = { token, props: this.props };
    this.props
      .dispatch(BasketAction.getBaskets(params))
      .then(baskets => this.setState({ baskets }));
  }

  render() {
    const { baskets } = this.state;
    console.log(baskets);
    return (
      <ScrollView>
        <CategoryItem
          item={baskets}
          screen="HomeItem"
          navigator={this.props.navigator}
        />
      </ScrollView>
    );
  }
}

export default (BasketScreen = connect(mapStateToProps)(BasketScreen));
