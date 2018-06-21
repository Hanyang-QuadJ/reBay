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
  Platform,
  Dimensions
} from "react-native";
import {
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Button,
  Text
} from "native-base";
import styles from "./style";
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerPan,
  TabViewPagerScroll
} from "react-native-tab-view";
import List from "../../Components/List/List";
import SearchList from "../../Components/SearchList/SearchList";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import * as commonStyle from "../../Constants/commonStyle";
import * as SearchAction from "../../Actions/SearchAction";
import { GoToHome } from "../index";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const mapStateToProps = state => {
  return {
    token: state.LoginReducer.token
  };
};

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      count: 0,
      type: 0,
      isNameLoading: false,
      isBrandLoading: false,
      isTagLoading: false,
      isCategoryLoading: false,
      itemByName: [],
      itemByBrand: [],
      itemByTag: [],
      itemByCategory: [],
      search: "",
      routes: [
        { key: "item", title: "제품명" },
        { key: "brand", title: "브랜드" },
        { key: "tag", title: "태그" },
        { key: "category", title: "카테고리" }
      ]
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  static navigatorButtons = {
    leftButtons: [
      {
        title: "Back", // for a textual button, provide the button title (label)
        id: "back" // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        // testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        // disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        // disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        // showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        // buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  };

  onNavigatorEvent(event) {
    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
    }
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: "white" }}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="검색"
              onChangeText={this.handleSearch}
              onSubmitEditing={this.handleSubmit}
            />
            <Icon name="ios-people" />
          </Item>
          <Button transparent onPress={this.handleBack}>
            <Text style={{ color: commonStyle.PRIMARY_COLOR }}>취소</Text>
          </Button>
        </Header>
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

  handleSubmit = () => {
    const { index } = this.state;
    const params = {
      props: this.props,
      query: this.state.search,
      index: 0
    };
    switch (index) {
      case 0:
        this.setState({ isNameLoading: true });
        return this.props
          .dispatch(SearchAction.searchItemByName(params))
          .then(item => {
            this.setState({ itemByName: item.result, isNameLoading: false });
          });
        break;
      case 1:
        this.setState({ isBrandLoading: true });
        return this.props
          .dispatch(SearchAction.searchItemByBrand(params))
          .then(item => {
            this.setState({ itemByBrand: item.result, isBrandLoading: false });
          });
        break;
      case 2:
        this.setState({ isTagLoading: true });
        return this.props
          .dispatch(SearchAction.searchItemByTag(params))
          .then(item => {
            this.setState({ itemByTag: item.result, isTagLoading: false });
          });
        break;
      case 3:
        this.setState({ isCategoryLoading: true });
        return this.props
          .dispatch(SearchAction.searchItemByCategory(params))
          .then(item => {
            this.setState({
              itemByCategory: item.result,
              isCategoryLoading: false
            });
          });
        break;
      default:
        break;
    }
  };

  handleSearch = text => {
    this.setState({ search: text });
  };

  handleBack = () => {
    this.props.navigator.dismissModal({
      animationType: "slide-down"
    });
  };

  _handleIndexChange = async index => {
    console.log(index);
    const { search } = this.state;
    const params = {
      props: this.props,
      query: this.state.search,
      index: 0
    };
    if (search.length !== 0) {
      switch (index) {
        case 0:
          this.setState({ index, isNameLoading: true });
          await this.props
            .dispatch(SearchAction.searchItemByName(params))
            .then(item => {
              this.setState({ itemByName: item.result, isNameLoading: false });
            });
          break;
        case 1:
          this.setState({ index, isBrandLoading: true });
          await this.props
            .dispatch(SearchAction.searchItemByBrand(params))
            .then(item => {
              this.setState({
                itemByBrand: item.result,
                isBrandLoading: false
              });
            });
          break;
        case 2:
          this.setState({ index, isTagLoading: true });
          await this.props
            .dispatch(SearchAction.searchItemByTag(params))
            .then(item => {
              this.setState({
                itemByTag: item.result,
                isTagLoading: false
              });
            });
          break;
        case 3:
          this.setState({ index, isCategoryLoading: true });
          await this.props
            .dispatch(SearchAction.searchItemByCategory(params))
            .then(item => {
              this.setState({
                itemByBrand: item.result,
                isCategoryLoading: false
              });
            });
          break;

        default:
          this.setState({ index });
          break;
      }
    } else {
      this.setState({ index });
    }
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
    const {
      itemByName,
      itemByBrand,
      itemByTag,
      itemByCategory,
      isNameLoading,
      isBrandLoading,
      isTagLoading,
      isCategoryLoading
    } = this.state;
    switch (route.key) {
      case "item":
        return <SearchList item={itemByName} isLoading={isNameLoading} />;
      case "brand":
        return <SearchList item={itemByBrand} isLoading={isBrandLoading} />;
      case "tag":
        return <SearchList item={itemByTag} isLoading={isTagLoading} />;
      case "category":
        return (
          <SearchList item={itemByCategory} isLoading={isCategoryLoading} />
        );
      default:
        return <View />;
    }
  };
}

export default (SearchScreen = connect(mapStateToProps)(SearchScreen));
