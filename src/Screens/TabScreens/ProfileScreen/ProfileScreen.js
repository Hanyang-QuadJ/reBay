import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
  Image
} from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import styles from "./style";
import * as commonStyle from "../../../Constants/commonStyle";
import * as LoginAction from "../../../Actions/LoginAction";
import { GoToHome } from "../../index";

const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me
  };
};

class ProfileScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;

  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  signOut = () => {
    this.props.dispatch(LoginAction.signOut()).then(value => {
      this.props.navigator.resetTo({
        screen: "Init", // unique ID registered with Navigation.registerScreen
        animated: false, // does the resetTo have transition animation or does it happen immediately (optional)
        animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
        navigatorStyle: {
          tabBarHidden: true
        } // override the navigator style for the pushed screen (optional)
      });
    });
  };
  opt1 = () => {
    this.props.navigator.push({
      screen: "Opt1",
      title: "등록정보",
      passProps: {}
    });
  };
  opt2 = () => {
    this.props.navigator.push({
      screen: "Opt2",
      title: "구매내역",
      passProps: {}
    });
  };
  opt3 = () => {
    this.props.navigator.push({
      screen: "Opt3",
      title: "판매내역",
      passProps: {}
    });
  };
  opt4 = () => {
    this.props.navigator.push({
      screen: "Opt4",
      title: "문의내역",
      passProps: {}
    });
  };
  opt5 = () => {
    this.props.navigator.push({
      screen: "Opt5",
      title: "임시저장내역",
      passProps: {}
    });
  };
  opt6 = () => {
    this.props.navigator.push({
      screen: "Opt6",
      title: "리베이 프로모션",
      passProps: {}
    });
  };
  opt7 = () => {
    this.props.navigator.push({
      screen: "Opt7",
      title: "리베이에 문의하기",
      passProps: {}
    });
  };
  opt8 = () => {
    this.props.navigator.push({
      screen: "Opt8",
      title: "푸쉬알림",
      passProps: {}
    });
  };
  opt9 = () => {
    this.props.navigator.push({
      screen: "Opt9",
      title: "이용약관",
      passProps: {}
    });
  };
  opt10 = () => {
    this.props.navigator.push({
      screen: "Opt10",
      title: "업데이트 정보",
      passProps: {}
    });
  };
  render() {
    const { me } = this.props;

    return (
      <Container>
        <Content>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{me.username}</Text>
              <Text style={styles.userGrade}>실버회원</Text>
            </View>
            <View style={styles.picArea}>
              <Image
                style={styles.thumbnail}
                source={{ url: me.profile_img }}
              />
            </View>
          </View>
          <TouchableOpacity onPress={this.opt1}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>등록정보</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt2}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>구매내역</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt3}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>판매내역</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt4}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>문의내역</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt5}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>임시저장내역</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt6}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>리베이 프로모션</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt7}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>리베이에 문의하기</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt8}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>푸쉬알림</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt9}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>이용약관</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.opt10}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>업데이트 정보</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signOut}>
            <View style={styles.option}>
              <View>
                <Icon style={styles.option__icon} name="home" />
              </View>
              <Text style={styles.option__text}>로그아웃</Text>
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default (ProfileScreen = connect(mapStateToProps)(ProfileScreen));
