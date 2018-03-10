import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';

import styles from './style';

const mapStateToProps = state => {
    return {
    };
};

class DefaultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }
    render() {
        console.log("rendered!");

        return (
            <View>
                <Text>Hi</Text>

            </View>


        )
    }
}

export default (DefaultScreen = connect(mapStateToProps)(DefaultScreen));
