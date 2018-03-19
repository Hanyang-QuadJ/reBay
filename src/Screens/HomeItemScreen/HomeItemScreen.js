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

} from 'react-native';
import {Container, Content, Icon} from 'native-base';
import styles from './style';
import * as commonStyle from '../../Constants/commonStyle';
import {GoToHome} from "../index";
import Item from '../../Components/Item/Item';
import * as ItemAction from '../../Actions/ItemAction';
import FooterButtonComponent from '../../Components/FooterButtonComponent/FooterButtonComponent';
import {DotIndicator} from 'react-native-indicators';

const mapStateToProps = state => {
    return {

    };
};

class HomeItemScreen extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            item: null,
            picture: null
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }

    componentDidMount() {
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
                this.props.dispatch(ItemAction.getItem(value, this.props.item_id)).then(item => {
                    this.setState({item:item});
                        this.props.dispatch(ItemAction.getItemPicture(value, this.props.item_id)).then(picture => {
                            this.setState({picture:picture})
                        });
                    }
                )
            }
        )
    }

    render() {
        if(this.state.item == null || this.state.picture == null){
            return(
                <Container style={{backgroundColor: 'white'}}>
                    <View style={{flex: 1}}>
                        <Item brand={this.props.brand_name}
                              username={null}
                              item_name={this.props.item_name}
                              price={this.props.price}
                              picture={null}
                              grade={4}
                        />
                        <FooterButtonComponent leftText="장바구니" rightText="구매하기"/>
                    </View>
                </Container>
            )
        }
        else{
            return (
                <Container>
                    <View style={{flex: 1}}>
                        <Item brand={this.props.brand_name}
                              username={this.state.item.item.username}
                              item_name={this.props.item_name}
                              price={this.props.price}
                              picture={this.state.picture}
                              grade={4}
                        />
                        <FooterButtonComponent leftText="장바구니" rightText="구매하기"/>
                    </View>
                </Container>
            )
        }
    }
}

export default (HomeItemScreen = connect(mapStateToProps)(HomeItemScreen));
