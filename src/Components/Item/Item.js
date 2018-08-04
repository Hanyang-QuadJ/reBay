import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
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
import Swiper from "react-native-swiper";
import LoadingActivity from "../../Components/LoadingActivity/LoadingActivity";
import * as commonStyle from "../../Constants/commonStyle";
import * as ItemAction from "../../Actions/ItemAction";
import FastImage from "react-native-fast-image";

const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me,
    token: state.LoginReducer.token
  };
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  componentWillMount() {}

  render() {
    const { me, user_id, item, onPressEditBrand, onPressUser } = this.props;
    const { isLiked } = this.state;
    const stars = [];
    const emptyStars = [];
    const starLength = 5;
    const userLength = this.props.grade;
    for (let i = 0; i < userLength; i++) {
      stars.push(
        <View key={i}>
          <Icon
            name="ios-star"
            style={{ fontSize: 12, color: commonStyle.PRIMARY_COLOR }}
          />
        </View>
      );
    }
    for (let i = 0; i < starLength - userLength; i++) {
      emptyStars.push(
        <View key={i}>
          <Icon
            name="ios-star-outline"
            style={{ fontSize: 12, color: commonStyle.PRIMARY_COLOR }}
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.userInfo}>
          <View style={styles.userInfoContainer}>
            <View style={styles.thumbnailArea}>
              <TouchableOpacity onPress={() => onPressUser(item)}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: item.profile_img }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoArea}>
              <Text style={styles.userInfoText}>
                {item.username === null ? <Text>******</Text> : item.username}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {stars}
                {emptyStars}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.pictureArea}>
          {this.props.picture === undefined || this.props.picture === null ? (
            <View style={styles.slide2}>
              <LoadingActivity />
            </View>
          ) : (
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              activeDot={
                <View
                  style={{
                    backgroundColor: commonStyle.PRIMARY_COLOR,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3
                  }}
                />
              }
            >
              {this.props.picture.map((picture, index) => {
                return (
                  <View key={picture.id} style={styles.slide1}>
                    <FastImage
                      style={styles.image}
                      source={{ uri: picture.image_url }}
                      resizeMode="contain"
                    />
                  </View>
                );
              })}
            </Swiper>
          )}
          {!isLiked ? (
            <TouchableOpacity style={styles.heart} onPress={this.handleLike}>
              <View>
                <Icon
                  name="ios-heart-outline"
                  size={20}
                  style={{ color: commonStyle.PRIMARY_COLOR }}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.heart} onPress={this.handleLike}>
              <View>
                <Icon
                  name="ios-heart"
                  size={20}
                  style={{ color: commonStyle.PRIMARY_COLOR }}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.itemInfo}>
          <View style={styles.itemInfoContainer}>
            <View style={styles.itemRow}>
              <Text style={styles.brand_name}>{this.props.brand}</Text>
              {me.id === item.user_id ? (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={onPressEditBrand}
                >
                  <Text style={styles.editButtonText}>수정</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.item_name}>{item.item_name}</Text>
              {me.id === item.user_id ? (
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>수정</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={styles.item_price}>￦{item.price}</Text>
          </View>
        </View>

        <View style={styles.itemDetail}>
          <View style={styles.itemDetailContainer}>
            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>제품명</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>{item.item_name}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>브랜드</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>{this.props.brand}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>사이즈</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>{item.size && item.size}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>발매 시즌</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  {item.season && item.season}
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>상세 설명</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  {item.content && item.content}
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.label}>
                <Text style={styles.labelText}>연관 태그</Text>
              </View>
              <View style={styles.content}>
                {this.props.tags === null
                  ? null
                  : this.props.tags.map((tags, index) => {
                      return (
                        <Text key={index} style={styles.tag}>
                          {tags.title}
                        </Text>
                      );
                    })}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  handleLike = () => {
    const { isLiked } = this.state;
    const params = { props: this.props };
    isLiked
      ? this.setState({ isLiked: false })
      : this.setState({ isLiked: true });
    this.props.dispatch(ItemAction.likeItem(params));
  };
}

export default (Item = connect(mapStateToProps)(Item));
