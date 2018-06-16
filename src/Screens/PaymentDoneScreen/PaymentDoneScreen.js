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
import * as commonStyle from "../../Constants/commonStyle";
import * as ItemAction from "../../Actions/ItemAction";
import { GoToHome } from "../index";
import StepHeader from "../../Components/StepHeader/StepHeader";

const mapStateToProps = state => {
  return {};
};

class PaymentDoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {}

  render() {
    return (
      <View>
        <Text>결제가 완료되었습니다!</Text>
      </View>
    );
  }
}

export default (PaymentDoneScreen = connect(mapStateToProps)(
  PaymentDoneScreen
));
