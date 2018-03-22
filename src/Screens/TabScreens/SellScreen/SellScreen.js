import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager,
    Image,
} from 'react-native';

import {
    Container,
    Content,
    Button,
    Text
} from 'native-base';
import * as commonStyle from '../../../Constants/commonStyle';


const mapStateToProps = state => {
    return {};
};

class SellScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;
    constructor(props) {
        super(props);
        this.state = {};
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // IOS
        if (event.id === 'modalTabSelected') {
            this.props.navigator.showModal({
                screen: 'Picture',
                title: '사진선택'
            });
        }
    }

    goToPicture = () => {
        this.props.navigator.showModal({
            screen: 'Picture',
            title: '사진선택'
        });

    };

    render() {

        return (
            <Container>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{fontSize:18, marginBottom:25}}>회원님의 상품을 판매하세요!</Text>
                    <Image style={{width:100, height:100}} source={require('../../../Assets/photos.png')}/>
                    <Button onPress={this.goToPicture} bordered style={{alignSelf:'auto', marginTop:25, borderColor:commonStyle.PRIMARY_COLOR}}>
                        <Text style={{color:commonStyle.PRIMARY_COLOR}}>판매하기</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default (SellScreen = connect(mapStateToProps)(SellScreen));
