import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager
} from 'react-native';
import {Container, Content, Icon} from 'native-base';
import styles from './style';
import * as commonStyle from '../../../../Constants/commonStyle';
import {GoToHome} from "../../../index";

const mapStateToProps = state => {
    return {};
};

class OptionScreen3 extends Component {
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
                <Text>판매내역</Text>

            </View>


        )
    }
}

export default (OptionScreen3 = connect(mapStateToProps)(OptionScreen3));
