import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import * as commonStyle from "../../../Constants/commonStyle";


const mapStateToProps = state => {
    return {
    };
};

class NoticeScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;


    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // IOS

    }

    render() {

        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>알림</Text>

            </View>


        )
    }
}

export default (NoticeScreen = connect(mapStateToProps)(NoticeScreen));
