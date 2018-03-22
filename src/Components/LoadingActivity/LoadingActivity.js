import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Input, Left, Body, Right, Button, Icon, Title } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
import * as commonStyle from "../../Constants/commonStyle";
import { DotIndicator } from 'react-native-indicators';
const mapStateToProps = state => {
    return {
    };
};
class LoadingActivity extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <DotIndicator color={commonStyle.PRIMARY_COLOR} count={3} size={15}/>
            </View>
        );
    }
}

export default (LoadingActivity = connect(mapStateToProps)(LoadingActivity));
