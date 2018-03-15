import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager,
    Image
} from 'react-native';
import {Container, Content, Icon, Spinner} from 'native-base';
import * as ItemAction from '../../Actions/ItemAction';
import styles from './style';
import Swiper from 'react-native-swiper';
import FooterButtonComponent from '../../Components/FooterButtonComponent/FooterButtonComponent';
import * as commonStyle from '../../Constants/commonStyle';
import FastImage from 'react-native-fast-image';
import { DotIndicator } from 'react-native-indicators';
import { GoToHome } from "../index";

const mapStateToProps = state => {
    return {
        brand: state.ItemReducer.brand_name,
        item: state.ItemReducer.item,
        item_id: state.ItemReducer.item_id,
        picture: state.ItemReducer.picture,
    };
};

class ItemScreen extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;
    static navigatorButtons = {
        leftButtons: [{
            title: "홈으로",
            id: "goToHome",
            buttonColor: commonStyle.PRIMARY_COLOR
        }]
    };

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            picture: []
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }


    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        console.log(event);
        if (event.id === "willAppear") {
            AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
                this.props.dispatch(ItemAction.getItem(value, 566))
                    .then(value2 => {
                            this.props.dispatch(ItemAction.getItemPicture(value, 566)).then(value3 => {
                                if (value3.length === 0) {

                                }
                            })
                        }
                    )
            });

        }
        if (event.id === "goToHome") {
            GoToHome();

        }

    }

    render() {
        const {item, picture, brand} = this.props;
        const stars = [];
        const emptyStars = [];
        const starLength = 5;
        const userLength = 3;
        for (let i = 0; i < userLength; i++) {
            stars.push(<View key={i}><Icon name="ios-star"
                                           style={{fontSize: 12, color: commonStyle.PRIMARY_COLOR}}/></View>);
        }
        for (let i = 0; i < starLength - userLength; i++) {
            emptyStars.push(<View key={i}><Icon name="ios-star-outline"
                                                style={{fontSize: 12, color: commonStyle.PRIMARY_COLOR}}/></View>);
        }
        // console.log(picture);
        if (item != null && picture != null) {
            return (
                <Container>
                    <View style={{flex: 1}}>
                        <View style={styles.userInfo}>
                            <View style={styles.userInfoContainer}>
                                <View style={styles.thumbnailArea}>
                                    <Image style={styles.thumbnail} source={require("../../Assets/yoon.png")}/>

                                </View>
                                <View style={styles.userInfoArea}>
                                    <Text style={styles.userInfoText}>
                                        {item.username}
                                    </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        {stars}
                                        {emptyStars}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.pictureArea}>
                            <Swiper style={styles.wrapper} showsButtons={false}>
                                {this.props.picture.map((picture, index) => {
                                    return (
                                        <View key={picture.id} style={styles.slide1}>
                                            <FastImage style={styles.image}
                                                       source={{uri: picture.image_url}}
                                            />
                                        </View>
                                    )
                                })}
                            </Swiper>
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoContainer}>
                                <Text style={styles.brand_name}>{brand.brand_name}</Text>
                                <Text style={styles.item_name}>{item.item_name}</Text>
                                <Text style={styles.item_price}>￦{item.price}</Text>
                            </View>

                        </View>
                        <FooterButtonComponent leftText="삭제하기" rightText="수정하기"/>
                    </View>
                </Container>
            )
        }
        else {
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <DotIndicator color={commonStyle.PRIMARY_COLOR} />
                </View>
            )
        }

    }
}

export default (ItemScreen = connect(mapStateToProps)(ItemScreen));
