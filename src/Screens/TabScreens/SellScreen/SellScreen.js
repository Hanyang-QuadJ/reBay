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

    onNavigatorEvent(event) { // IOS
        if(event.id === 'modalTabSelected'){
            this.props.navigator.showModal({
                screen: 'Picture',
                title:'사진선택'
            });
        }
    }

    goToPicture = () => {
        this.props.navigator.showModal({
            screen: 'Picture',
            title:'사진선택'
        });

    };
    render() {

        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={this.goToPicture}>
                    <Text>상품을 판매하세요!</Text>
                </TouchableOpacity>

            </View>


        )
    }
}

export default (SellScreen = connect(mapStateToProps)(SellScreen));
