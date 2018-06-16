import React, { Component } from "react";
import { Text, View, AsyncStorage, Image } from "react-native";
import { connect } from "react-redux";
import { Button } from "native-base";
import { GoToHome } from "../index";
import { Navigation } from "react-native-navigation";
import * as BrandAction from "../../Actions/BrandAction";
import * as DefaultAction from "../../Actions/DefaultAction";
import * as RecommendAction from "../../Actions/RecommendAction";
import * as LoginAction from "../../Actions/LoginAction";
import * as UserAction from "../../Actions/UserAction";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import FastImage from "react-native-fast-image";

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token,
    isLogin: state.LoginReducer.isLogin
  };
};

class InitScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { isLogin } = this.props;
    if (isLogin) {
      const params = { token: this.props.token };
      this.props.dispatch(UserAction.getMe(params)).then(me => {
        this.goToTab();
      });
    } else {
      this.props.navigator.push({
        screen: "Tutorial",
        animated: false
      });
    }
  }

  goToTab = async () => {
    const params = { props: this.props };
    await this.props.dispatch(BrandAction.getBrand(params));
    await this.props
      .dispatch(RecommendAction.getRecommend())
      .then(async value2 => {
        let imageArray = [];
        for (let i = 0; i < value2.length; i++) {
          imageArray.push({ uri: value2[i].image_url });
        }
        await FastImage.preload(imageArray);
        await GoToHome();
      });
  };

  render() {
    return <View />;
  }
}

export default (InitScreen = connect(mapStateToProps)(InitScreen));
