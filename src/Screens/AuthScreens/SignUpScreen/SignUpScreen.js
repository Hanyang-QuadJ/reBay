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
import * as commonStyle from "../../../Constants/commonStyle";
import { GoToHome } from "../../index";
import StepHeader from "../../../Components/StepHeader/StepHeader";
import InputComponent from "../../../Components/InputComponent/InputComponent";
import RoundButton from "../../../Components/RoundButton/RoundButton";

const mapStateToProps = state => {
  return {};
};

class SignUpScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;

  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  goToSignUp2 = () => {
    this.props.navigator.push({
      screen: "SignUp2",
      passProps: {
        username: this.state.username
      },
      backButtonTitle: "아이디"
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: commonStyle.PRIMARY_COLOR }}>
        <View style={styles.header}>
          <StepHeader
            text1=""
            text2="아이디를"
            text3="입력해주세요."
            color={commonStyle.SECONDARY_COLOR}
            paddingBottom={50}
            currentStep={1}
            stepColor={commonStyle.SECONDARY_COLOR}
            finalStep={4}
          />
        </View>
        <View style={styles.body}>
          <InputComponent
            image={require("../../../Assets/dress.png")}
            placeholder=""
            onChangeText={username => this.setState({ username })}
            textColor={commonStyle.SECONDARY_COLOR}
            style={{ borderColor: commonStyle.SECONDARY_COLOR }}
          />
        </View>
        <View>
          <RoundButton
            backgroundColor={commonStyle.SECONDARY_COLOR}
            text="다음으로"
            textColor={commonStyle.PRIMARY_COLOR}
            onPress={this.goToSignUp2}
          />
        </View>
      </View>
    );
  }
}

export default (SignUpScreen = connect(mapStateToProps)(SignUpScreen));
