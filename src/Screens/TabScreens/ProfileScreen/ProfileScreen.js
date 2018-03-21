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
                    screen: 'Tutorial', // unique ID registered with Navigation.registerScreen
                    animated: false, // does the resetTo have transition animation or does it happen immediately (optional)
                    animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
                    navigatorStyle: {
                        tabBarHidden:true
                    }, // override the navigator style for the pushed screen (optional)
                });
            }
        )
    };

    render() {
        console.log("rendered!");

        return (
            <View>
                <Button onPress={this.signOut} full><Text>로그아웃</Text></Button>
            </View>


        )
    }
}

export default (ProfileScreen = connect(mapStateToProps)(ProfileScreen));
