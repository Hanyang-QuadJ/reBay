import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

import styles from "./style3";
import {
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  InteractionManager,
  TouchableWithoutFeedback,
  Picker
} from "react-native";
import * as ItemActionCreator from "../../../Actions/ItemAction";
import * as BrandActionCreator from "../../../Actions/BrandAction";
import ItemFlatList from "../../../Components/ItemFlatList/ItemFlatList";
import LoadingActivity from "../../../Components/LoadingActivity/LoadingActivity";
import FastImage from "react-native-fast-image";
import ModalDropdown from "react-native-modal-dropdown";

import { GoToHome } from "../../index";

import * as commonStyle from "../../../Constants/commonStyle";

const DEMO_OPTIONS_1 = ["싼순", "비싼순", "오래된순", "최신순"];
const mapStateToProps = state => {
  return {
    items: state.ItemReducer.items
  };
};

class BuyScreen3 extends Component {
  static navigatorStyle = commonStyle.TabBarHidden;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      category: this.props.category,
      detailCategory: this.props.detailCategory,
      status: this.props.status,
      season: this.props.season,
      loading: false,
      nextIndex: 0,
      reachEnd: 0,
      noItems: false,
      condition: 0
    };
  }

  _goToItem = item => {
    this.props.navigator.push({
      screen: "HomeItem",
      title: item.item_name,
      passProps: {
        item_id: item.item_id,
        brand_name: item.brand_name,
        item_name: item.item_name,
        price: item.price
      }
    });
  };

  componentWillMount() {
    this.props
      .dispatch(
        ItemActionCreator.postItems(
          this.props.brand_id,
          this.props.category,
          this.props.detailCategory,
          this.props.status,
          this.props.year + " " + this.props.season,
          this.props.maxPrice,
          this.props.minPrice,
          this.state.nextIndex,
          this.state.condition
        )
      )
      .then(async value => {
        const imageArray = [];
        if (value.result.length === 0) {
          this.setState({ noItems: true });
        } else {
          for (let i = 0; i < value.result.length; i++) {
            console.log(value.result[i].image_url);
            imageArray.push({ uri: value.result[i].image_url });
          }
          await FastImage.preload(imageArray);
          await this.setState({
            nextIndex: value.nextIndex,
            items: value.result
          });
        }
      });
  }

  _handleEnd = async () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      await this.setState({ loading: true });
      await this.props
        .dispatch(
          ItemActionCreator.postItems(
            this.props.brand_id,
            this.props.category,
            this.props.detailCategory,
            this.props.status,
            this.props.year + " " + this.props.season,
            this.props.maxPrice,
            this.props.minPrice,
            this.state.nextIndex,
            this.state.condition
          )
        )
        .then(value => {
          this.setState(state => ({
            items: [...state.items, ...value.result],
            nextIndex: value.nextIndex,
            loading: false
          }));
        });
    }
    this.onEndReachedCalledDuringMomentum = true;
  };

  async _dropdown_onSelect(idx, value) {
    await this.setState({
      condition: idx,
      nextIndex: 0
    });
    await AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
      this.props
        .dispatch(
          ItemActionCreator.postItems(
            token,
            this.props.brand_id,
            this.props.category,
            this.props.detailCategory,
            this.props.status,
            this.props.year + " " + this.props.season,
            this.props.maxPrice,
            this.props.minPrice,
            this.state.nextIndex,
            this.state.condition
          )
        )
        .then(async value => {
          const imageArray = [];
          if (value.result.length === 0) {
            this.setState({ noItems: true });
          } else {
            for (let i = 0; i < value.result.length; i++) {
              console.log(value.result[i].image_url);
              imageArray.push({ uri: value.result[i].image_url });
            }
            await FastImage.preload(imageArray);
            await this.setState({
              nextIndex: value.nextIndex,
              items: value.result
            });
          }
        });
    });
  }

  render() {
    const { brand } = this.props;
    return (
      <View style={{ backgroundColor: "white" }}>
        {this.state.items == null ? (
          <LoadingActivity />
        ) : this.state.noItems == true ? (
          <Text>No Items</Text>
        ) : (
          <View>
            <ModalDropdown
              style={styles.dropdown_6}
              options={DEMO_OPTIONS_1}
              onSelect={(idx, value) => this._dropdown_onSelect(idx, value)}
              defaultIndex={0}
              defaultValue={"싼순"}
            />
            <ItemFlatList
              brand={brand}
              items={this.state.items}
              loading={this.state.loading}
              onPress={this._goToItem}
              onEndReached={this._handleEnd}
              onMomentumScrollBegin={() => {
                this.onEndReachedCalledDuringMomentum = false;
              }}
            />

            {/* <FlatList
              contentContainerStyle={styles.container}
              horizontal={false}
              numColumns={2}
              keyExtractor={this._keyExtractor}
              data={this.state.items}
              renderItem={this._renderItem}
              ListFooterComponent={this.renderFooter}
              onEndReached={this._handleEnd}
              onMomentumScrollBegin={() => {
                this.onEndReachedCalledDuringMomentum = false;
              }}
              onEndReachedThreshold={0}
            /> */}
          </View>
        )}
      </View>
    );
  }
}

export default (BuyScreen3 = connect(mapStateToProps)(BuyScreen3));
