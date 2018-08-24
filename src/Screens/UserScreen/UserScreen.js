import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  InteractionManager,
  Dimensions,
  Platform,
  Animated
} from "react-native";
import { Container, Content, Icon, Text } from "native-base";
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerPan,
  TabViewPagerScroll
} from "react-native-tab-view";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import * as ItemAction from "../../Actions/ItemAction";
import * as UserAction from "../../Actions/UserAction";
import Thumb from "../../Components/Thumb/Thumb";
import ItemFlatList from "../../Components/ItemFlatList/ItemFlatList";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import { GoToHome } from "../index";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me,
    token: state.LoginReducer.token
  };
};

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "item", title: "판매 상품" },
        { key: "rating", title: "판매자 평가" }
      ],
      item: [],
      isLoading: true,
      isFollowed: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const { dispatch, item } = this.props;
    const params = { props: this.props, user_id: item.user_id };
    dispatch(ItemAction.getItemsByUserId(params)).then(item => {
      this.setState({ item, isLoading: false });
    });
  }

  render() {
    const { me, item } = this.props;
    return (
      <Container style={{ backgroundColor: "white" }}>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
          renderPager={this._renderPager}
        />
      </Container>
    );
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderPager = props => {
    return Platform.OS === "ios" ? (
      <TabViewPagerScroll {...props} />
    ) : (
      <TabViewPagerPan swipeEnabled={false} {...props} />
    );
  };

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex =>
        inputIndex === index
          ? commonStyle.PRIMARY_COLOR
          : commonStyle.TEXT_COLOR
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange
    });

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderHeader = props => {
    const { me, item } = this.props;
    const { isFollowed } = this.state;
    const stars = [];
    const emptyStars = [];
    const starLength = 5;
    const userLength = 3;
    for (let i = 0; i < userLength; i++) {
      stars.push(
        <View key={i}>
          <Icon
            name="ios-star"
            style={{
              fontSize: 13,
              marginRight: 3,
              color: commonStyle.PRIMARY_COLOR
            }}
          />
        </View>
      );
    }
    for (let i = 0; i < starLength - userLength; i++) {
      emptyStars.push(
        <View key={i}>
          <Icon
            name="ios-star-outline"
            style={{
              fontSize: 13,
              marginRight: 3,
              color: commonStyle.PRIMARY_COLOR
            }}
          />
        </View>
      );
    }
    return (
      <View>
        <View style={styles.userInfo}>
          <View style={styles.userInfo__thumbName}>
            <Thumb src={item.profile_img} size={45} />
            <View style={styles.userInfo__nameRate}>
              <Text style={styles.userInfo__name}>{item.username}</Text>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                {stars}
                {emptyStars}
              </View>
            </View>
          </View>
          <View style={styles.userInfo__followArea}>
            <View style={styles.userInfo__following}>
              <Text style={styles.userInfo__followingText}>팔로잉</Text>
              <Text style={styles.userInfo__followingNumber}>10명</Text>
            </View>
            <View style={styles.userInfo__follower}>
              <Text style={styles.userInfo__followingText}>팔로워</Text>
              <Text style={styles.userInfo__followingNumber}>10명</Text>
            </View>
            {!isFollowed ? (
              <TouchableOpacity onPress={this.handleFollow}>
                <View style={styles.userInfo__followButton}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../Assets/Icons/shop/follow_icon.png")}
                  />
                  <Text style={styles.userInfo__followButtonText}>+팔로우</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.handleUnFollow}>
                <View style={styles.userInfo__followButton__cancel}>
                  <Text style={styles.userInfo__followButtonTextFollowed}>
                    -팔로우
                  </Text>
                  <Text style={styles.userInfo__followButtonTextFollowed}>
                    취소
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: commonStyle.PRIMARY_COLOR }}
          renderLabel={this._renderLabel(props)}
          labelStyle={{
            color: commonStyle.TEXT_COLOR,
            fontSize: 13,
            marginVertical: 1
          }}
          tabStyle={{
            height: 40
          }}
          style={{ backgroundColor: "white" }}
        />
      </View>
    );
  };

  _renderScene = ({ route }) => {
    const { item, isLoading } = this.state;
    switch (route.key) {
      case "item":
        return isLoading ? (
          <LoadingActivity />
        ) : (
          <ItemFlatList
            isInner
            items={item}
            onPress={this._goToItem}
            loading={false}
          />
        );
      case "rating":
        return <View />;
      default:
        return <View />;
    }
  };

  _goToItem = item => {
    this.props.navigator.push({
      screen: "HomeItem",
      title: item.item_name,
      passProps: {
        item_id: item.id,
        brand_name: item.brand.brand_name,
        item_name: item.item_name,
        price: item.price
      }
    });
  };

  handleFollow = () => {
    const { dispatch } = this.props;
    const params = { props: this.props };
    this.setState(state => ({
      isFollowed: true
    }));
    dispatch(UserAction.postFollow(params)).then(value => {
      console.log(value);
    });
  };

  handleUnFollow = () => {
    this.setState(state => ({
      isFollowed: false
    }));
  };
}

export default (UserScreen = connect(mapStateToProps)(UserScreen));
