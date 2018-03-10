import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';

import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {
    };
};

class BuyScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }
    render() {

        return (
            <View>
                <Text>Hi</Text>

            </View>


        )
    }
}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
