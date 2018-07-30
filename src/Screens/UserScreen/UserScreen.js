import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  InteractionManager
} from "react-native";
import { Container, Content, Icon, Text } from "native-base";
import styles from "./style";
import * as commonStyle from "../../Constants/commonStyle";
import Thumb from "../../Components/Thumb/Thumb";
import { GoToHome } from "../index";

const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me
  };
};

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
  }

  render() {
    const { me } = this.props;
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
      <Container style={{ backgroundColor: "white" }}>
        <View style={styles.userInfo}>
          <View style={styles.userInfo__thumbName}>
            <Thumb src={me.profile_img} size={45} />
            <View style={styles.userInfo__nameRate}>
              <Text style={styles.userInfo__name}>강진주</Text>
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
            <View>
              <Image
                source={require("../../Assets/Icons/shop/follow_icon.png")}
              />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default (UserScreen = connect(mapStateToProps)(UserScreen));
