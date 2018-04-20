import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager
} from 'react-native';
import {Container, Content, Icon, Button, Text} from 'native-base';
import styles from './style';
import * as commonStyle from '../../../Constants/commonStyle';
import {GoToHome} from "../../index";

const mapStateToProps = state => {
    return {};
};

class ProfileScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;

    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }

    signOut = () => {
        AsyncStorage.removeItem("ACCESS_TOKEN").then(value => {
                this.props.navigator.resetTo({
                    screen: 'Init', // unique ID registered with Navigation.registerScreen
                    animated: false, // does the resetTo have transition animation or does it happen immediately (optional)
                    animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
                    navigatorStyle: {
                        tabBarHidden:true
                    }, // override the navigator style for the pushed screen (optional)
                });
            }
        )
    };
    opt1 = () => {
        this.props.navigator.push({
                screen: 'Opt1',
                title: '등록정보',
                passProps: {

                }
            }
        )
    }
    opt2 = () => {
        this.props.navigator.push({
                screen: 'Opt2',
                title: '구매내역',
                passProps: {

                }
            }
        )
    }
    opt3 = () => {
        this.props.navigator.push({
                screen: 'Opt3',
                title: '판매내역',
                passProps: {

                }
            }
        )
    }
    opt4 = () => {
        this.props.navigator.push({
                screen: 'Opt4',
                title: '문의내역',
                passProps: {

                }
            }
        )
    }
    opt5 = () => {
        this.props.navigator.push({
                screen: 'Opt5',
                title: '임시저장내역',
                passProps: {

                }
            }
        )
    }
    opt6 = () => {
        this.props.navigator.push({
                screen: 'Opt6',
                title: '리베이 프로모션',
                passProps: {

                }
            }
        )
    }
    opt7 = () => {
        this.props.navigator.push({
                screen: 'Opt7',
                title: '리베이에 문의하기',
                passProps: {

                }
            }
        )
    }
    opt8 = () => {
        this.props.navigator.push({
                screen: 'Opt8',
                title: '푸쉬알림',
                passProps: {

                }
            }
        )
    }
    opt9 = () => {
        this.props.navigator.push({
                screen: 'Opt9',
                title: '이용약관',
                passProps: {

                }
            }
        )
    }
    opt10 = () => {
        this.props.navigator.push({
                screen: 'Opt10',
                title: '업데이트 정보',
                passProps: {

                }
            }
        )
    }
    render() {
        console.log("rendered!");

        return (
            <View>
                <Button onPress={this.signOut} full><Text>로그아웃</Text></Button>
                <Button onPress={this.opt1} full><Text>등록정보</Text></Button>
                <Button onPress={this.opt2} full><Text>구매내역</Text></Button>
                <Button onPress={this.opt3} full><Text>판매내역</Text></Button>
                <Button onPress={this.opt4} full><Text>문의내역</Text></Button>
                <Button onPress={this.opt5} full><Text>임시저장내역</Text></Button>
                <Button onPress={this.opt6} full><Text>리베이 프로모션</Text></Button>
                <Button onPress={this.opt7} full><Text>리베이에 문의하기</Text></Button>
                <Button onPress={this.opt8} full><Text>푸쉬알림</Text></Button>
                <Button onPress={this.opt9} full><Text>이용약관</Text></Button>
                <Button onPress={this.opt10} full><Text>업데이트 정보</Text></Button>
            </View>


        )
    }
}

export default (ProfileScreen = connect(mapStateToProps)(ProfileScreen));
