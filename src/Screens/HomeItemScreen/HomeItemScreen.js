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
  Alert
} from "react-native";
import { Container, Content, Icon } from "native-base";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import { GoToHome } from "../index";
import Item from "../../Components/Item/Item";
import * as ItemAction from "../../Actions/ItemAction";
import * as BasketAction from "../../Actions/BasketAction";
import FooterCart from "../../Components/FooterCart/FooterCart";
import { DotIndicator } from "react-native-indicators";

const mapStateToProps = state => {
  return {
    isLogin: state.LoginReducer.isLogin,
    token: state.LoginReducer.token
  };
};

class HomeItemScreen extends Component {
  static navigatorStyle = commonStyle.TabBarHidden;

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      item: null,
      picture: null
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentDidMount() {
    this.props.dispatch(ItemAction.getItem(this.props.item_id)).then(item => {
      this.setState({ item: item });
      this.props
        .dispatch(ItemAction.getItemPicture(this.props.item_id))
        .then(picture => {
          this.setState({ picture: picture });
        });
    });
  }

  render() {
    if (this.state.item == null || this.state.picture == null) {
      return (
        <Container style={{ backgroundColor: "white" }}>
          <Content>
            <Item
              brand={this.props.brand_name}
              tags={null}
              username={null}
              season={null}
              size={null}
              content={null}
              item_name={this.props.item_name}
              price={this.props.price}
              picture={null}
              grade={4}
            />
          </Content>
          <FooterCart
            firstText="장바구니"
            secondText="댓글"
            thridText="구매하기"
          />
        </Container>
      );
    } else {
      return (
        <Container>
          <Content>
            <Item
              brand={this.props.brand_name}
              username={this.state.item.item.username}
              item_name={this.props.item_name}
              size={this.state.item.item.size}
              content={this.state.item.item.content}
              season={this.state.item.item.season}
              price={this.props.price}
              picture={this.state.picture}
              grade={4}
              tags={this.state.item.tags[0]}
            />
          </Content>
          <FooterCart
            onPressFirst={this.handleBasket}
            firstText="장바구니"
            secondText="댓글"
            thridText="구매하기"
          />
        </Container>
      );
    }
  }

  handleBasket = () => {
    const { isLogin, token, item_id } = this.props;
    if (isLogin === false) {
      Alert.alert(
        "로그인 필요합니다!",
        "장바구니 이용을 위해서 로그인을 해주세요",
        [
          { text: "취소", onPress: () => null, style: "cancel" },
          {
            text: "확인",
            onPress: () =>
              this.props.navigator.resetTo({
                screen: "Init", // unique ID registered with Navigation.registerScreen
                animated: false, // does the resetTo have transition animation or does it happen immediately (optional)
                animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
                navigatorStyle: {
                  tabBarHidden: true
                } // override the navigator style for the pushed screen (optional)
              })
          }
        ],
        { cancelable: false }
      );
    } else {
      const params = { token, item_id };
      this.props.dispatch(BasketAction.postBasket(params)).then(
        Alert.alert(
          "상품이 장바구니에 담겼습니다!",
          "장바구니로 바로 이동하시겠습니까?",
          [
            { text: "계속 쇼핑하기", onPress: () => null, style: "cancel" },
            {
              text: "확인",
              onPress: () =>
                this.props.navigator.push({
                  screen: "Basket" // unique ID registered with Navigation.registerScreen
                })
            }
          ],
          { cancelable: false }
        )
      );
    }
  };
}

export default (HomeItemScreen = connect(mapStateToProps)(HomeItemScreen));
