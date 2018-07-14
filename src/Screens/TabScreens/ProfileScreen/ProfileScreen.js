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
import styles from "./style";
import * as commonStyle from "../../../Constants/commonStyle";
import * as LoginAction from "../../../Actions/LoginAction";
import * as ItemAction from "../../../Actions/ItemAction";
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
    this.props.dispatch(LoginAction.signOut()).then(async value => {
      if (value === "signOut") {
        await AsyncStorage.removeItem("ACCESS_TOKEN");
        await this.props.navigator.resetTo({
          screen: "Init", // unique ID registered with Navigation.registerScreen
          animated: false, // does the resetTo have transition animation or does it happen immediately (optional)
          animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
          navigatorStyle: {
            tabBarHidden: true
          } // override the navigator style for the pushed screen (optional)
        });
      }
    });
  };

  opt1 = () => {
    const params = { props: this.props };
    // this.props.dispatch(ItemAction.buyItem(params));
    this.signOut();
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
              <Text style={styles.userName}>{me && me.username}</Text>
              <Text style={styles.userGrade}>실버회원</Text>
            </View>
            <View style={styles.picArea}>
              <Image
                style={styles.thumbnail}
                source={{ url: me && me.profile_img }}
              />
            </View>
          </View>
          <List>
            <ListItem
              icon
              button={true}
              onPress={this.opt1}
              style={styles.option_wrapper}
            >
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="settings" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.option__text}>회원정보</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button={true}
              onPress={this.opt2}
              style={styles.option_wrapper}
            >
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="plane" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.option__text}>구매내역</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button={true}
              onPress={this.opt3}
              style={styles.option_wrapper}
            >
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="plane" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.option__text}>판매내역</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button={true}
              onPress={this.opt4}
              style={styles.option_wrapper}
            >
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="plane" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.option__text}>문의내역</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button={true}
              onPress={this.signOut}
              style={styles.option_wrapper}
            >
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.option__text}>로그아웃</Text>
              </Body>
            </ListItem>
          </List>

          {/* <View style={styles.option}>
            <TouchableOpacity style={styles.option_wrapper} onPress={this.opt5}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>임시저장내역</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity style={styles.option_wrapper} onPress={this.opt6}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>리베이 프로모션</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity style={styles.option_wrapper} onPress={this.opt7}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>리베이에 문의하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity style={styles.option_wrapper} onPress={this.opt8}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>푸쉬알림</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity style={styles.option_wrapper} onPress={this.opt9}>
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>이용약관</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity
              style={styles.option_wrapper}
              onPress={this.opt10}
            >
              <View>
                <Icon style={styles.option__icon} name="ios-settings" />
              </View>
              <Text style={styles.option__text}>업데이트 정보</Text>
            </TouchableOpacity>
          </View> */}
        </Content>
      </Container>
    );
  }
}

export default (ProfileScreen = connect(mapStateToProps)(ProfileScreen));
