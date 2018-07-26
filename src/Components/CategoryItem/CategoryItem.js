import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
import FastImage from "react-native-fast-image";
import { Text } from "native-base";

const mapStateToProps = state => {
  return {};
};

class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  goToItem = (item_id, brand_name, item_name, price, user_id) => {
    this.props.navigator.push({
      screen: this.props.screen,
      title: item_name,
      passProps: {
        isBasket: this.props.isBasket,
        user_id,
        item_id: item_id,
        brandName: brand_name,
        item_name: item_name,
        price: price
      }
    });
  };

  render() {
    const { isInner } = this.props;
    if (isInner) {
      return (
        <View style={styles.itemList}>
          {this.props.item.map((data, index) => {
            if ((index + 1) % 2 !== 0) {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    this.goToItem(
                      data.item_id,
                      data.brand.brand_name,
                      data.item.item_name,
                      data.item.price,
                      data.user_id
                    )
                  }
                >
                  <View style={styles.itemLeft}>
                    <FastImage
                      style={styles.itemImage}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{
                        uri: data.image.image_url
                      }}
                    />
                    <Text
                      style={
                        data.item.item_status === "새상품"
                          ? styles.item_status_new
                          : styles.item_status_old
                      }
                    >
                      {data.item.item_status}
                    </Text>
                    <Text style={styles.item_brand}>
                      {data.brand.brand_name}
                    </Text>
                    <Text style={styles.item_name}>{data.item.item_name}</Text>
                    <Text style={styles.item_price}>￦{data.item.price}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            } else {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    this.goToItem(
                      data.item_id,
                      data.brand.brand_name,
                      data.item.item_name,
                      data.item.price,
                      data.user_id
                    )
                  }
                >
                  <View style={styles.itemRight}>
                    <FastImage
                      style={styles.itemImage}
                      resizeMode={FastImage.resizeMode.contain}
                      source={{ uri: data.image.image_url }}
                    />
                    <Text
                      style={
                        data.item.item_status === "새상품"
                          ? styles.item_status_new
                          : styles.item_status_old
                      }
                    >
                      {data.item.item_status}
                    </Text>
                    <Text style={styles.item_brand}>
                      {data.brand.brand_name}
                    </Text>
                    <Text style={styles.item_name}>{data.item.item_name}</Text>
                    <Text style={styles.item_price}>￦{data.item.price}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }
          })}
        </View>
      );
    } else {
      return (
        <View style={styles.itemList}>
          {this.props.item.map((data, index) => {
            if ((index + 1) % 2 !== 0) {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    this.goToItem(
                      data.item_id,
                      data.brand_name,
                      data.item_name,
                      data.price,
                      data.user_id
                    )
                  }
                >
                  <View style={styles.itemLeft}>
                    <FastImage
                      style={styles.itemImage}
                      resizeMode={FastImage.resizeMode.cover}
                      source={{
                        uri: data.image_url
                      }}
                    />
                    <Text
                      style={
                        data.item_status === "새상품"
                          ? styles.item_status_new
                          : styles.item_status_old
                      }
                    >
                      {data.item_status}
                    </Text>
                    <Text style={styles.item_brand}>{data.brand_name}</Text>
                    <Text style={styles.item_name}>{data.item_name}</Text>
                    <Text style={styles.item_price}>￦{data.price}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            } else {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    this.goToItem(
                      data.item_id,
                      data.brand_name,
                      data.item_name,
                      data.price,
                      data.user_id
                    )
                  }
                >
                  <View style={styles.itemRight}>
                    <FastImage
                      style={styles.itemImage}
                      resizeMode={FastImage.resizeMode.cover}
                      source={{ uri: data.image_url }}
                    />
                    <Text
                      style={
                        data.item_status === "새상품"
                          ? styles.item_status_new
                          : styles.item_status_old
                      }
                    >
                      {data.item_status}
                    </Text>
                    <Text style={styles.item_brand}>{data.brand_name}</Text>
                    <Text style={styles.item_name}>{data.item_name}</Text>
                    <Text style={styles.item_price}>￦{data.price}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }
          })}
        </View>
      );
    }
  }
}

export default (CategoryItem = connect(mapStateToProps)(CategoryItem));
