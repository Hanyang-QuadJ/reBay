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
import * as UserAction from "../../../Actions/UserAction";
import { GoToHome } from "../../index";
import StepHeader from "../../../Components/StepHeader/StepHeader";
import InputComponent from "../../../Components/InputComponent/InputComponent";
import RoundButton from "../../../Components/RoundButton/RoundButton";

const mapStateToProps = state => {
  return {};
};

class SignUpScreen3 extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      verifyNumber: "",
      isSent: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }
  goToSignUp4 = () => {
    this.props.navigator.push({
      screen: "SignUp4",
      passProps: {
        username: this.props.username,
        email: this.props.email,
        phone: this.state.phone
      },
      backButtonTitle: "휴대폰번호"
    });
  };

  render() {
    const { isSent } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: commonStyle.PRIMARY_COLOR }}>
        <View style={styles.header}>
          <StepHeader
            text1=""
            text2={isSent ? "인증번호를" : "휴대폰 번호를"}
            text3="입력해주세요."
            color={commonStyle.SECONDARY_COLOR}
            paddingBottom={50}
            currentStep={3}
            stepColor={commonStyle.SECONDARY_COLOR}
            finalStep={4}
          />
        </View>
        <View style={styles.body}>
          <InputComponent
            image={require("../../../Assets/dress.png")}
            placeholder={
              isSent ? "인증번호를 입력하세요" : "휴대폰 번호를 입력하세요"
            }
            keyboardType="number-pad"
            onChangeText={phone => this.setState({ phone })}
            textColor={commonStyle.SECONDARY_COLOR}
            style={{ borderColor: commonStyle.SECONDARY_COLOR }}
          />
        </View>
        <View>
          <RoundButton
            backgroundColor={commonStyle.SECONDARY_COLOR}
            text={isSent ? "다음으로" : "인증번호 받기"}
            textColor={commonStyle.PRIMARY_COLOR}
            onPress={this.handleVerify}
          />
        </View>
      </View>
    );
  }

  handleVerify = () => {
    const { dispatch } = this.props;
    const params = { props: this.props, phone_number: this.state.phone };
    dispatch(UserAction.verifyNumber(params)).then(value => {
      this.setState({ isSent: true });
      console.log(value);
    });
  };
}

export default (SignUpScreen2 = connect(mapStateToProps)(SignUpScreen3));
