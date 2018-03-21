import React, {Component} from 'react';
import {Text, View, AsyncStorage, Image} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'native-base';
import {GoToHome} from "../index";
import {Navigation} from 'react-native-navigation';
import * as BrandAction from '../../Actions/BrandAction';
import * as DefaultAction from '../../Actions/DefaultAction';
import * as RecommendAction from '../../Actions/RecommendAction';
import styles from './style';
import * as commonStyle from '../../Constants/commonStyle';
import FastImage from 'react-native-fast-image';

const mapStateToProps = state => {
    return {
        data: state.DefaultReducer.data
    };
};

class InitScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {

            if (value === null || value === undefined || value === "") {
                this.props.navigator.push({
                    screen: 'Tutorial',
                    animated: false
                });
            }
            else {
                this.goToTab();
            }
        })
    }


    goToTab = async () => {
        await this.props.dispatch(BrandAction.getBrand());
        await this.props.dispatch(RecommendAction.getRecommend()).then(
            async value2 => {
                let imageArray = [];
                for (let i = 0; i < value2.length; i++) {
                    imageArray.push({uri: value2[i].image_url});
                }
                await FastImage.preload(imageArray);
                await GoToHome();
            });

    };

    render() {
        return (
            <View>

            </View>

        )

    }

}

export default (InitScreen = connect(mapStateToProps)(InitScreen));

