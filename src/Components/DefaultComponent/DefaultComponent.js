import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Input, Left, Body, Right, Button, Icon, Title } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
const mapStateToProps = state => {
    return {
    };
};
class DefaultComponent extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>

            </View>


        );
    }
}

export default (DefaultComponent = connect(mapStateToProps)(DefaultComponent));
