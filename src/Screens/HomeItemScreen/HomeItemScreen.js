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
import * as LoginAction from "../../Actions/LoginAction";
import FooterCart from "../../Components/FooterCart/FooterCart";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import { DotIndicator } from "react-native-indicators";
import ContentLoader from "react-native-content-loader";

const mapStateToProps = state => {
  return {
    isLogin: state.LoginReducer.isLogin,
    token: state.LoginReducer.token,
    item: state.ItemReducer.item,
    picture: state.ItemReducer.picture,
    brand_name: state.ItemReducer.brand_name,
    tags: state.ItemReducer.tags
  };
};

class HomeItemScreen extends Component {
  static navigatorStyle = commonStyle.TabBarHidden;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: [],
      picture: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentDidMount() {
    this.props.dispatch(ItemAction.getItem(this.props.item_id)).then(item => {
      this.props
        .dispatch(ItemAction.getItemPicture(this.props.item_id))
        .then(picture => {
          this.setState({ item, picture, isLoading: false });
        });
    });
  }

  render() {
    const { isLoading } = this.state;
    const { item, picture, tags, brand_name } = this.props;
    return (
      <Container>
        <Content contentContainerStyle={isLoading ? { flex: 1 } : null}>
          {isLoading ? (
            <LoadingActivity />
          ) : (
            <Item
              brand={brand_name}
              item={item}
              picture={picture}
              grade={4}
              tags={tags[0]}
              onPressEditBrand={this.handleEditBrand}
            />
          )}
        </Content>
        <FooterCart
          onPressFirst={this.handleBasket}
          onPressSecond={this.handleHelp}
          onPressThird={this.handleBuy}
          firstText="장바구니"
          secondText="댓글"
          thridText="구매하기"
        />
      </Container>
    );
  }

  handleBasket = () => {
    const { isLogin, token, item_id } = this.props;
    if (!isLogin) {
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
      const params = { token, item_id, props: this.props };
      this.props.dispatch(BasketAction.postBasket(params)).then(
        Alert.alert(
          "상품이 장바구니에 담겼습니다!",
          "장바구니로 바로 이동하시겠습니까?",
          [
            { text: "계속 쇼핑하기", onPress: () => null, style: "cancel" },
            {
              text: "확인",
              onPress: () => {
                this.props.navigator.push({
                  title: "장바구니",
                  screen: "Basket" // unique ID registered with Navigation.registerScreen
                });
              }
            }
          ],
          { cancelable: false }
        )
      );
    }
  };

  handleBuy = () => {
    this.props.navigator.push({
      screen: "Payment1"
    });
  };

  handleHelp = () => {
    this.props.navigator.push({
      screen: "Help",
      passProps: {
        isMe: true,
        user_id: this.props.user_id,
        item_id: this.props.item_id
      }
    });
  };

  handleEditBrand = () => {
    this.props.navigator.push({
      screen: "Brand",
      passProps: { isEdit: true }
    });
  };
}

export default (HomeItemScreen = connect(mapStateToProps)(HomeItemScreen));
