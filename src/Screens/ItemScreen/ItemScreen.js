import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager,
    Image
} from 'react-native';
import {Container, Content, Icon, Spinner} from 'native-base';
import * as ItemAction from '../../Actions/ItemAction';
import styles from './style';
import Swiper from 'react-native-swiper';
import FooterButtonComponent from '../../Components/FooterButtonComponent/FooterButtonComponent';
import LoadingIndicator from '../../Components/LoadingActivity/LoadingActivity';
import Item from '../../Components/Item/Item';
import * as commonStyle from '../../Constants/commonStyle';
import * as RecommendAction from '../../Actions/RecommendAction';
import FastImage from 'react-native-fast-image';
import { DotIndicator } from 'react-native-indicators';
import { GoToHome } from "../index";

const mapStateToProps = state => {
    return {
        brand: state.ItemReducer.brand_name,
        item: state.ItemReducer.item,
        item_id: state.ItemReducer.item_id,
    };
};

class ItemScreen extends Component {
    static navigatorStyle = commonStyle.CannotGoBack;
    static navigatorButtons = {
        leftButtons: [{
            title: "홈으로",
            id: "goToHome",
        }]
    };

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            picture: [],
            homeLoading:false
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }


    async onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

        if (event.id === "goToHome") {
            this.setState({homeLoading:true});
            await this.props.dispatch(RecommendAction.getRecommend());
            await GoToHome();

        }

    }

    render() {
        const { brand, item, picture } = this.props;
        switch (this.state.homeLoading) {
            case true:
                return (
                    <LoadingIndicator/>
                );
            default:
                return (
                    <Container style={{backgroundColor: 'white'}}>
                        <View style={{flex: 1}}>
                            <Item brand={brand.brand_name}
                                  username={item.username}
                                  item_name={item.item_name}
                                  price={item.price}
                                  picture={picture}
                                  grade={3}
                            />
                            <FooterButtonComponent leftText="삭제하기" rightText="수정하기"/>
                        </View>
                    </Container>
                )
        }



    }
}

export default (ItemScreen = connect(mapStateToProps)(ItemScreen));
