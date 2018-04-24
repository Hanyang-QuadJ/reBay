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
import FooterCart from '../../Components/FooterCart/FooterCart';
import {DotIndicator} from 'react-native-indicators';

const mapStateToProps = state => {
    return {
        isLogin: state.LoginReducer.isLogin,
        token: state.LoginReducer.token
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
        this.props.dispatch(ItemAction.getItem(this.props.item_id)).then(item => {
                this.setState({item: item});
                this.props.dispatch(ItemAction.getItemPicture(this.props.item_id)).then(picture => {
                    this.setState({picture: picture})
                });
            }
        )
    }

    render() {
        if (this.state.item == null || this.state.picture == null) {
            return (
                <Container style={{backgroundColor: 'white'}}>
                    <Content>
                        <Item brand={this.props.brand_name}
                              tags={null}
                              username={null}
                              season={null}
                              size={null}
                              content={null}
                              item_name={this.props.item_name}
                              price={this.props.price}
                              picture={null}
                              grade={4}
                        />
                    </Content>
                    <FooterCart firstText="장바구니" secondText="댓글" thridText="구매하기"/>
                </Container>
            )
        }
        else {

            return (
                <Container>
                    <Content>
                        <Item brand={this.props.brand_name}
                              username={this.state.item.item.username}
                              item_name={this.props.item_name}
                              size={this.state.item.item.size}
                              content={this.state.item.item.content}
                              season={this.state.item.item.season}
                              price={this.props.price}
                              picture={this.state.picture}
                              grade={4}
                              tags={this.state.item.tags[0]}
                        />
                    </Content>
                    <FooterCart onPressFirst={this.handleBasket} firstText="장바구니" secondText="댓글" thridText="구매하기"/>
                </Container>
            )
        }
    }

    handleBasket = () =>  {
        console.log(this.props.isLogin);
        console.log(this.props.token);

    }
}

export default (HomeItemScreen = connect(mapStateToProps)(HomeItemScreen));
