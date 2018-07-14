import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import { GoToHome } from "../../index";
import { Navigation } from "react-native-navigation";
import * as LoginAction from "../../../Actions/LoginAction";
import * as UserAction from "../../../Actions/UserAction";
import commonStyle from "../../index";
import InputComponent from "../../../Components/InputComponent/InputComponent";
import {
  Container,
  Text,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Item,
  Input,
  Form,
  StyleProvider
} from "native-base";
import styles from "./styles";
import * as RecommendAction from "../../../Actions/RecommendAction";
import * as BrandAction from "../../../Actions/BrandAction";
import { DotIndicator } from "react-native-indicators";
import FastImage from "react-native-fast-image";
import firebase from "react-native-firebase";

const mapStateToProps = state => {
  return {};
};

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSignIn: false
    };
  }

  sendToAction = async () => {
    // await this.props.dispatch(BrandAction.getBrand());
    this.setState({ isSignIn: true });
    const fcm_token = await this.getToken();
    this.props
      .dispatch(
        LoginAction.postLogin(this.state.email, this.state.password, fcm_token)
      )
      .then(token => {
        const params = { token };
        this.props.dispatch(UserAction.getMe(params)).then(me => {
          const params = { props: this.props };
          this.props.dispatch(BrandAction.getBrand(params)).then(brand => {
            this.props
              .dispatch(RecommendAction.getRecommend())
              .then(async value3 => {
                let imageArray = [];
                for (let i = 0; i < value3.length; i++) {
                  imageArray.push({ uri: value3[i].image_url });
                }
                await FastImage.preload(imageArray);
                await GoToHome();
              });
          });
        });
      });
  };

  componentDidUpdate() {}

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Content contentContainerStyle={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
            <View style={styles.logoContainer}>
              <Text>REBAY LOGO</Text>
            </View>

            <View style={styles.formContainer}>
              <View>
                <View style={styles.container}>
                  <View style={styles.icon}>
                    <Icon type="MaterialIcons" name="person-outline" />
                  </View>
                  <View style={styles.input}>
                    <Input
                      autoCapitalize="none"
                      placeholder="아이디"
                      onChangeText={email => this.setState({ email })}
                      value={this.state.email}
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.container}>
                  <View style={styles.icon}>
                    <Icon type="MaterialIcons" name="lock-open" />
                  </View>
                  <View style={styles.input}>
                    <Input
                      autoCapitalize="none"
                      placeholder="비밀번호"
                      secureTextEntry={true}
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                full
                rounded
                onPress={this.sendToAction}
                style={{
                  backgroundColor: commonStyle.PRIMARY_COLOR,
                  height: 45,
                  marginTop: 20,
                  marginLeft: 40,
                  marginRight: 40,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 50
                }}
              >
                {this.state.isSignIn === false ? (
                  <Text>로그인</Text>
                ) : (
                  <DotIndicator
                    size={10}
                    count={3}
                    color={commonStyle.SECONDARY_COLOR}
                  />
                )}
              </Button>
              <Text
                style={{ marginTop: 10, color: commonStyle.SECONDARY_COLOR }}
              >
                비밀번호를 잊어버리셨나요?
              </Text>
            </View>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }

  getToken = async () => {
    const token = await firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log(fcmToken);
          return fcmToken;
        } else {
          // user doesn't have a device token yet
          console.log(fcmToken);
        }
      });
    return token;
  };
}

export default (SignInScreen = connect(mapStateToProps)(SignInScreen));
