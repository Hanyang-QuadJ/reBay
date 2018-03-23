import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Input, Left, Body, Right, Button, Icon, Title } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
import Swiper from 'react-native-swiper';
import * as commonStyle from '../../Constants/commonStyle';
const mapStateToProps = state => {
    return {
    };
};
class SwiperComponent extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Swiper showsButtons={false} activeDot={<View style={{backgroundColor: commonStyle.PRIMARY_COLOR ,
                    width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}>
                    <View style={styles.slide1}>
                        <Image style={styles.image}
                               resizeMode="contain"
                               source={require('../../Assets/pic1.jpg')}
                        /></View>
                    <View style={styles.slide2}>
                        <Image style={styles.image}
                               resizeMode="contain"
                               source={require('../../Assets/pic2.jpg')}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image}
                               resizeMode="contain"
                               source={require('../../Assets/pic3.jpg')}
                        />
                    </View>
                </Swiper>
            </View>



        );
    }
}

export default (SwiperComponent = connect(mapStateToProps)(SwiperComponent));
