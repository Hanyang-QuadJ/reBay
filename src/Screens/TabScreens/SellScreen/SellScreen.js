import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';


const mapStateToProps = state => {
    return {
    };
};

class SellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if(event.id === 'modalTabSelected'){
            this.props.navigator.showModal({
                screen: 'Picture',
                title:'사진선택'
            });
        }
    }
    render() {

        return (
            <View>
                <Text>Hi</Text>

            </View>


        )
    }
}

export default (SellScreen = connect(mapStateToProps)(SellScreen));
