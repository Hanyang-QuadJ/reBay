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
  TouchableWithoutFeedback
} from "react-native";
import { Container, Content, Icon } from "native-base";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import GoToHome from "../../../App";
import FastImage from "react-native-fast-image";

const mapStateToProps = state => {
  return {};
};

class ItemFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      items,
      handleEnd,
      onMomentumScrollBegin,
      onEndReached,
      onPress,
      brand
    } = this.props;

    return (
      <FlatList
        contentContainerStyle={styles.container}
        horizontal={false}
        numColumns={2}
        keyExtractor={this._keyExtractor}
        data={items}
        renderItem={this._renderItem}
        ListFooterComponent={this.renderFooter}
        onEndReached={onEndReached}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onEndReachedThreshold={0}
      />
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item, index }) => {
    const { isInner, onPress } = this.props;
    if ((index + 1) % 2 !== 0) {
      return (
        <TouchableWithoutFeedback onPress={() => onPress(item)}>
          <View style={styles.itemLeft}>
            <FastImage
              style={styles.itemImage}
              resizeMode={FastImage.resizeMode.cover}
              source={
                isInner
                  ? { uri: item.image && item.image.image_url }
                  : { uri: item.image_url }
              }
            />
            {item.item_status === "새상품" ? (
              <View style={styles.itemOverlay} />
            ) : null}
            {item.item_status === "새상품" ? (
              <View style={styles.itemOverlayText}>
                <Text style={styles.item_status_new}>새상품</Text>
              </View>
            ) : null}
            <Text style={styles.item_brand}>
              {isInner ? item.brand.brand_name : this.props.brand}
            </Text>
            <Text style={styles.item_name}>{item.item_name}</Text>
            <Text style={styles.item_price}>￦{item.price}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={() => onPress(item)}>
          <View style={styles.itemRight}>
            <FastImage
              style={styles.itemImage}
              resizeMode={FastImage.resizeMode.cover}
              source={
                isInner
                  ? { uri: item.image && item.image.image_url }
                  : { uri: item.image_url }
              }
            />
            {item.item_status === "새상품" ? (
              <View style={styles.itemOverlay} />
            ) : null}
            {item.item_status === "새상품" ? (
              <View style={styles.itemOverlayText}>
                <Text style={styles.item_status_new}>새상품</Text>
              </View>
            ) : null}
            <Text style={styles.item_brand}>
              {isInner ? item.brand.brand_name : this.props.brand}
            </Text>
            <Text style={styles.item_name}>{item.item_name}</Text>
            <Text style={styles.item_price}>￦{item.price}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  renderFooter = () => {
    const { loading } = this.props;
    if (!loading) return null;
    else {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      );
    }
  };
}

export default (ItemFlatList = connect(mapStateToProps)(ItemFlatList));
