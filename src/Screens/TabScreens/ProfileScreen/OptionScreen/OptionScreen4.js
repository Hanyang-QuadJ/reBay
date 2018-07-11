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
  Dimensions,
  Platform,
  Animated
} from "react-native";
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerPan,
  TabViewPagerScroll
} from "react-native-tab-view";
import { Container, Content, Icon } from "native-base";
import styles from "./style";
import * as commonStyle from "../../../../Constants/commonStyle";
import List from "../../../../Components/List/List";
import LoadingActivity from "../../../../Components/LoadingActivity/LoadingActivity";
import * as UserAction from "../../../../Actions/UserAction";
import { GoToHome } from "../../../index";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token,
    me: state.LoginReducer.me
  };
};

class OptionScreen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      ans: [],
      index: 0,
      isLoading: true,
      routes: [
        { key: "question", title: "문의 한 내역" },
        { key: "answer", title: "문의 받은 내역" }
      ]
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  componentWillMount() {
    const params = { props: this.props, seller_id: this.props.me.id };
    this.props.dispatch(UserAction.getQuestion(params)).then(question => {
      this.props.dispatch(UserAction.getAnswer(params)).then(ans => {
        this.setState({ question, ans, isLoading: false });
      });
    });

    // this.props.dispatch(UserAction.getUnSelledList(params)).then(list => {
    //   console.log(list);
    //   this.setState({ selled: result.result, unSelled: list.items });
    // });
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
          tabStyle={{
            height: 40
          }}
          style={{ backgroundColor: "white" }}
        />
      </View>
    );
  };

  _renderScene = ({ route }) => {
    const { question, ans, isLoading } = this.state;
    switch (route.key) {
      case "question":
        return isLoading ? (
          <LoadingActivity />
        ) : (
          <FlatList
            scrollEventThrottle={1}
            keyExtractor={this._keyExtractor}
            data={question}
            renderItem={this._renderItem}
          />
        );
      case "answer":
        return isLoading ? (
          <LoadingActivity />
        ) : (
          <FlatList
            scrollEventThrottle={1}
            keyExtractor={this._keyExtractor}
            data={ans}
            renderItem={this._renderItemAns}
          />
        );
      default:
        return <View />;
    }
  };

  render() {
    const { question, ans } = this.state;
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

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <List
      isPic
      content={item.item_name}
      onPress={() => this.handleHelp(item)}
      image={item.image && item.image.image_url}
      item_status={item.status}
    />
  );

  _renderItemAns = ({ item }) => (
    <List
      isPic
      content={item.item_name}
      onPress={() => this.handleHelpAns(item)}
      image={item.image && item.image.image_url}
      item_status={item.status}
    />
  );

  handleHelp = item => {
    this.props.navigator.push({
      screen: "Help",
      passProps: {
        isMe: true,
        item_id: item.id
      }
    });
  };

  handleHelpAns = item => {
    this.props.navigator.push({
      screen: "Help",
      passProps: {
        isMe: false,
        item_id: item.id
      }
    });
  };
}

export default (OptionScreen3 = connect(mapStateToProps)(OptionScreen4));
