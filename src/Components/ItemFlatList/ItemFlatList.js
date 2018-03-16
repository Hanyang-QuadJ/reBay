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
import * as commonStyle from '../../Constants/commonStyle';
import GoToHome from '../../../App';

const mapStateToProps = state => {
    return {};
};

class ItemFlatList extends Component {
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
            <FlatList/>



        )
    }
}

export default (ItemFlatList = connect(mapStateToProps)(ItemFlatList));