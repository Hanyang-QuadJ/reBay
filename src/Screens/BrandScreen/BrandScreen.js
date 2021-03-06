import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
  KeyboardAvoidingView,
  RefreshControl
} from "react-native";
import {
  Container,
  Text,
  Content,
  Button,
  Item,
  Input,
  ListItem,
  List,
  Icon,
  Body,
  Right
} from "native-base";
import StepHeader from "../../Components/StepHeader/StepHeader";

const HEADER_HEIGHT = 200;
const COLLAPSED_HEIGHT = 20;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import * as ItemAction from "../../Actions/ItemAction";

const mapStateToProps = state => {
  return {
    brand: state.BrandReducer.brand,
    token: state.LoginReducer.token
  };
};

class BrandScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;

  // static navigatorStyle = commonStyle.TabBarHidden;

  constructor(props) {
    super(props);
    this.state = {
      currentBrand: this.props.brand.brands,
      scroll: new Animated.Value(0)
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  filterBySearchBar(text) {
    const brands = [];
    if (this.props.brand != null) {
      this.props.brand.brands.forEach(function(val, index) {
        if (
          val.brand_name.indexOf(text) !== -1 ||
          val.brand_name_kor.indexOf(text) !== -1
        ) {
          brands.push(val);
        }
      });
    }
    this.setState({
      currentBrand: brands
    });
  }

  _keyExtractor = (item, index) => item.id.toString();

  _onPressItem = item => {};
  _renderItem2 = ({}) => {};

  _renderItem = ({ item }) => (
    <ListItem
      style={styles.brandList}
      button={true}
      onPress={() => this.handleBrand(item)}
    >
      <Body>
        <Text style={styles.brand}>{item.brand_name}</Text>
      </Body>
      <Right>
        <Button
          onPress={() => this.handleBrand(item)}
          bordered
          style={styles.choice}
        >
          <Text style={styles.choiceText}>선택</Text>
        </Button>
      </Right>
    </ListItem>
  );
  _renderHeader = () => {};

  render() {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0.001, SCROLLABLE_HEIGHT],
      outputRange: [0.001, -SCROLLABLE_HEIGHT],
      extrapolate: "clamp"
    });

    const { isEdit } = this.props;

    return (
      <Container style={{ backgroundColor: "white" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              zIndex: 10,
              transform: [{ translateY }]
            }}
          >
            <StepHeader
              text1="상품의"
              text2="브랜드는"
              text3="무엇인가요?"
              color={commonStyle.PRIMARY_COLOR}
              stepColor={commonStyle.TEXT_COLOR}
              paddingBottom={30}
              currentStep={isEdit ? 1 : 2}
              finalStep={isEdit ? 1 : 6}
            />

            <View style={styles.searchBar}>
              <Icon
                name="ios-search"
                size={30}
                style={styles.searchBar__icon}
              />
              <Input
                style={styles.itemStyle}
                onChangeText={text => this.filterBySearchBar(text)}
              />
            </View>
          </Animated.View>
          <AnimatedFlatList
            contentContainerStyle={{ paddingTop: 245 }}
            keyboardShouldPersistTaps={"always"}
            keyboardDismissMode="on-drag"
            scrollEventThrottle={1}
            keyExtractor={this._keyExtractor}
            data={this.state.currentBrand}
            renderItem={this._renderItem}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
              { useNativeDriver: true }
            )}
          />
        </View>
      </Container>
    );
  }

  handleBrand = item => {
    const { isEdit } = this.props;

    const params = {
      props: this.props,
      brand_name: item.brand_name,
      body: { brand_id: item.id }
    };
    if (isEdit) {
      this.props.dispatch(ItemAction.editBrand(params)).then(value => {
        this.props.navigator.pop();
      });
    } else {
      this.props.navigator.push({
        screen: "SellFilter",
        title: "상품정보",
        passProps: {
          brandName: item.brand_name,
          brandID: item.id,
          pic_list: this.props.base64
        }
      });
    }
  };
}

export default (BrandScreen = connect(mapStateToProps)(BrandScreen));
