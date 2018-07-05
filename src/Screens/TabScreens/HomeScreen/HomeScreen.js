import React, { Component } from "react";
import {
  FlatList,
  View,
  AsyncStorage,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  RefreshControl,
  Platform,
  TouchableOpacity,
  findNodeHandle,
  PushNotificationIOS,
  UIManager
} from "react-native";
import { Icon, Button, Text } from "native-base";
import photo from "../../../Constants/photo";
import SwiperComponent from "../../../Components/SwiperComponent/SwiperComponent";
import CategoryItem from "../../../Components/CategoryItem/CategoryItem";
import { connect } from "react-redux";
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerPan,
  TabViewPagerScroll
} from "react-native-tab-view";
import HomeTabScreen from "../HomeTabScreen/HomeTabScreen";
import styles from "./style";
import * as commonStyle from "../../../Constants/commonStyle";
import FastImage from "react-native-fast-image";
import * as RecommendAction from "../../../Actions/RecommendAction";
import { Tab } from "../../index";
import DeviceInfo from "react-native-device-info";
// import PushNotification from "react-native-push-notification";
import firebase from "react-native-firebase";
import { Notification, NotificationOpen } from "react-native-firebase";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const mapStateToProps = state => {
  return {
    recommend: state.RecommendReducer.recommend,
    isLogin: state.LoginReducer.isLogin
  };
};

function showObj(obj) {
  var str = "";
  for (key in obj) {
    str += key + "=" + obj[key] + "\n";
  }

  alert(str);
  return;
}

class HomeScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;

  static navigatorButtons = {
    rightButtons: [
      {
        title: "Cart", // for a textual button, provide the button title (label)
        id: "cart" // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        // testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        // disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        // disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        // showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        // buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
      {
        title: "Search",
        id: "search"
      }
    ]
  };

  constructor(props) {
    super(props);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      refreshing: false,
      index: 0,
      man: 0,
      woman: 0,
      manShoe: 0,
      womanShoe: 0,
      bag: 0,
      fashion: 0,
      purse: 0,
      ring: 0,
      cosmetic: 0,
      glasses: 0,
      watch: 0,
      isApproved: false,
      deviceId: "",
      routes: [
        { key: "first", title: "카테고리 추천" },
        { key: "second", title: "신규 상품" }
      ],
      currentIndex: 0
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
      if (event.id == "cart") {
        this.props.navigator.push({
          title: "장바구니",
          screen: "Basket"
        });
      } else if (event.id == "search") {
        this.props.navigator.showModal({
          title: "검색",
          screen: "Search"
        });
      }
    }
  }
  async componentWillMount() {
    let result = DeviceInfo.getUniqueID();
    let number = DeviceInfo.getPhoneNumber();
    this.setState({ deviceId: result });
    const token = await this.getToken();
  }

  async componentDidMount() {
    const { isLogin } = this.props;
    const { isApproved } = this.state;
    if (isLogin) {
      let result = await this.hasPermission();
      if (result === true) {
        // this.displayNotification();
        this.listeningNotification();
      } else {
        this.requestPermission();
      }
    } else {
      return null;
    }
  }

  pullToRefresh = () => {
    this.setState({ refreshing: true });
    this.props.dispatch(RecommendAction.refreshRecommend()).then(value => {
      this.setState({ refreshing: false });
    });
  };

  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
    this.notificationOpenedListener();
  }

  //TabView Functions
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
    return (
      <View>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: commonStyle.PRIMARY_COLOR }}
          renderLabel={this._renderLabel(props)}
          labelStyle={{
            color: commonStyle.TEXT_COLOR,
            fontSize: 13,
            marginVertical: 1
          }}
          style={{ backgroundColor: "white" }}
        />
      </View>
    );
  };

  //Scrollable Tab Functions
  handleRoute = index => {
    this.setState({ currentIndex: index });
    if (index === 0) {
      this.scrollView.scrollTo({ animated: true, y: this.state.man });
    } else if (index === 1) {
      this.scrollView.scrollTo({ animated: true, y: this.state.woman });
    } else if (index === 2) {
      this.scrollView.scrollTo({ animated: true, y: this.state.manShoe });
    } else if (index === 3) {
      this.scrollView.scrollTo({ animated: true, y: this.state.womanShoe });
    } else if (index === 4) {
      this.scrollView.scrollTo({ animated: true, y: this.state.bag });
      this.h_scrollView.scrollTo({ animated: true, x: 0 });
    } else if (index === 5) {
      this.scrollView.scrollTo({ animated: true, y: this.state.fashion });
      this.h_scrollView.scrollTo({ animated: true, x: 30 });
    } else if (index === 6) {
      this.scrollView.scrollTo({ animated: true, y: this.state.purse });
      this.h_scrollView.scrollTo({ animated: true, x: 90 });
    } else if (index === 7) {
      this.scrollView.scrollTo({ animated: true, y: this.state.ring });
      this.h_scrollView.scrollTo({ animated: true, x: 150 });
    } else if (index === 8) {
      this.scrollView.scrollTo({ animated: true, y: this.state.cosmetic });
      this.h_scrollView.scrollTo({ animated: true, x: 210 });
    } else if (index === 9) {
      this.scrollView.scrollTo({ animated: true, y: this.state.glasses });
      this.h_scrollView.scrollTo({ animated: true, x: 330 });
    } else if (index === 10) {
      this.scrollView.scrollTo({ animated: true, y: this.state.watch });
      this.h_scrollView.scrollTo({ animated: true, x: 390 });
    }
  };

  handleRoute2 = index => {
    this.setState({ currentIndex: index });
    if (this.state.currentIndex === 5) {
      this.h_scrollView.scrollTo({ animated: true, x: 0 });
    } else if (this.state.currentIndex === 6) {
      this.h_scrollView.scrollTo({ animated: true, x: 30 });
    } else if (this.state.currentIndex === 7) {
      this.h_scrollView.scrollTo({ animated: true, x: 90 });
    } else if (this.state.currentIndex === 8) {
      this.h_scrollView.scrollTo({ animated: true, x: 150 });
    } else if (this.state.currentIndex === 9) {
      this.h_scrollView.scrollTo({ animated: true, x: 210 });
    } else if (this.state.currentIndex === 10) {
      this.h_scrollView.scrollTo({ animated: true, x: 270 });
    }
  };

  _renderScene = ({ route }) => {
    const tab = Tab.route;
    switch (route.key) {
      case "first":
        return (
          <ScrollView
            stickyHeaderIndices={[1]}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.pullToRefresh}
              />
            }
            useNativeDriver={true}
            scrollEventThrottle={1}
            onScroll={event => {
              const position = event.nativeEvent.contentOffset.y;
              if (position >= 0 && position <= this.state.man + 50) {
                this.handleRoute2(0);
              } else if (
                position >= this.state.woman &&
                position <= this.state.woman + 50
              ) {
                this.handleRoute2(1);
              } else if (
                position >= this.state.manShoe &&
                position <= this.state.manShoe + 50
              ) {
                this.handleRoute2(2);
              } else if (
                position >= this.state.womanShoe &&
                position <= this.state.womanShoe + 50
              ) {
                this.handleRoute2(3);
              } else if (
                position >= this.state.bag &&
                position <= this.state.bag + 50
              ) {
                this.handleRoute2(4);
              } else if (
                position >= this.state.fashion &&
                position <= this.state.fashion + 50
              ) {
                this.handleRoute2(5);
              } else if (
                position >= this.state.purse &&
                position <= this.state.purse + 50
              ) {
                this.handleRoute2(6);
              } else if (
                position >= this.state.ring &&
                position <= this.state.ring + 50
              ) {
                this.handleRoute2(7);
              } else if (
                position >= this.state.cosmetic &&
                position <= this.state.cosmetic + 50
              ) {
                this.handleRoute2(8);
              } else if (
                position >= this.state.glasses &&
                position <= this.state.glasses + 50
              ) {
                this.handleRoute2(9);
              } else if (
                position >= this.state.watch &&
                position <= this.state.watch + 50
              ) {
                this.handleRoute2(10);
              }
            }}
            ref={c => (this.scrollView = c)}
          >
            <SwiperComponent />
            <ScrollView
              horizontal={true}
              ref={d => (this.h_scrollView = d)}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabBar}
            >
              {tab.map((tab, index) => {
                return (
                  <View style={styles.tab} key={index}>
                    {this.state.currentIndex === index ? (
                      <TouchableOpacity onPress={() => this.handleRoute(index)}>
                        <View style={styles.tabContainer}>
                          <Image style={styles.tabBarImage} source={tab.icon} />
                          <Text style={styles.tabBarText}>{tab.name}</Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => this.handleRoute(index)}>
                        <View style={styles.tabContainer}>
                          <Image
                            style={styles.tabBarImageO}
                            source={tab.icon}
                          />
                          <Text style={styles.tabBarTextO}>{tab.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </ScrollView>
            <View
              ref={view => {
                this.man = view;
              }}
              collapsable={false}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ man: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>남성의류</Text>
            </View>
            <CategoryItem
              item={this.props.recommend}
              screen="HomeItem"
              navigator={this.props.navigator}
            />

            <View
              ref={view => {
                this.woman = view;
              }}
              collapsable={false}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ woman: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>여성의류</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.manShoe = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ manShoe: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>남성슈즈</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.womanShoe = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ womanShoe: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>여성슈즈</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.bag = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ bag: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>가방</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.fashion = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ fashion: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>패션잡화</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.purse = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ purse: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>지갑/벨트</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.ring = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ ring: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>악세사리</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.cosmetic = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ cosmetic: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>화장품/향수</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.glasses = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ glasses: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>선글라스/안경</Text>
            </View>
            <CategoryItem item={this.props.recommend} />

            <View
              ref={view => {
                this.watch = view;
              }}
              onLayout={({ nativeEvent }) => {
                const position = nativeEvent.layout.y;
                this.setState({ watch: position - 45 });
              }}
            >
              <Text style={styles.itemLabel}>시계</Text>
            </View>
            <CategoryItem item={this.props.recommend} />
          </ScrollView>
        );
      case "second":
        return <View style={{ backgroundColor: "#673ab7", flex: 1 }} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        renderPager={this._renderPager}
      />
    );
  }

  requestPermission = () => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        // User has authorised
        this.setState({ isApproved: true });
        // this.displayNotification();
        this.listeningNotification();
      })
      .catch(error => {
        // User has rejected permissions
        this.setState({ isApproved: false });
      });
  };

  hasPermission = async () => {
    const permission = await firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          // this.displayNotification();
          return true;
        } else {
          // user doesn't have permission
          return false;
        }
      });
    return permission;
  };

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

  displayNotification = () => {
    const notification = new firebase.notifications.Notification()
      .setNotificationId("notificationId")
      .setTitle("My notification title")
      .setBody("My notification body")
      .android.setChannelId("fcm-default-channel")
      .setData({
        key1: "value1",
        key2: "value2"
      });
    firebase.notifications().displayNotification(notification);
  };

  listeningNotification = () => {
    if (Platform.OS === "android") {
      const channel = new firebase.notifications.Android.Channel(
        "fcm-default-channel",
        "Test Channel",
        firebase.notifications.Android.Importance.Max
      ).setDescription("My apps test channel");
      firebase.notifications().android.createChannel(channel);
    }

    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        console.log(notification);
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // Process your notification as required
        alert(notification._title);
      });

    //When foreground, background

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification = notificationOpen.notification;
        alert(notification._title);
      });

    //When Shutdown

    firebase
      .notifications()
      .getInitialNotification()
      .then(notificationOpen => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          // Get information about the notification that was opened
          const notification = notificationOpen.notification;
          alert(showObj(notification));
        }
      });
  };
}

export default (HomeScreen = connect(mapStateToProps)(HomeScreen));
