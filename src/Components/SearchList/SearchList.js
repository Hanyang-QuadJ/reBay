import React, { Component } from "react";
import { View, FlatList } from "react-native";
import {
  Container,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
import LoadingActivity from "../LoadingActivity/LoadingActivity";
import List from "../List/List";
const mapStateToProps = state => {
  return {};
};
class SearchList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, isLoading, onPress } = this.props;
    return (
      <View>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              marginTop: 200,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LoadingActivity />
          </View>
        ) : item.length === 0 ? (
          <View
            style={{
              flex: 1,
              marginTop: 200,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>해당하는 검색 결과가 없습니다</Text>
          </View>
        ) : (
          <FlatList
            scrollEventThrottle={1}
            keyExtractor={this._keyExtractor}
            data={item}
            renderItem={this._renderItem}
          />
        )}
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <List
      isPic
      onPress={() => this._goToItem(item)}
      content={item.item_name}
      image={item.images.length === 0 ? null : item.images[0].image_url}
    />
  );

  _goToItem = item => {
    this.props.navigator.push({
      screen: "HomeItem",
      title: item.item_name,
      passProps: {
        item_id: item.id,
        item_name: item.item_name,
        price: item.price
      }
    });
  };
}

export default (SearchList = connect(mapStateToProps)(SearchList));
