import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';

import styles from './style3';
import {AsyncStorage, View, FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import * as ItemActionCreator from "../../../Actions/ItemAction";
import * as BrandActionCreator from "../../../Actions/BrandAction";

const mapStateToProps = state => {
    return {
        items: state.ItemReducer.items
    };
};

class BuyScreen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            detailCategory: this.props.detailCategory,
            status: this.props.status,
            season: this.props.season,
            loading: false,
            nextIndex: 0,

        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items !== null && this.state.items != null) {
            console.log("@@@@@@@@@");
            console.log(nextProps.items);
            console.log("@@@@@@@@@");
            nextIndex = nextProps.items.nextIndex;
            items = this.state.items;
            items.result.concat(nextProps.items.result);
            this.setState({
                items: items,
                nextIndex: nextIndex,
            });
        }
        if (nextProps.items !== null) {
            console.log("@@@@@@@@@");
            console.log(nextProps.items);
            console.log("@@@@@@@@@");
            items = nextProps.items;
            nextIndex = nextProps.items.nextIndex;
            this.setState({
                items: items,
                nextIndex: nextIndex,
            });
        }
    }

    goToBuyScreen4(item) {

        this.props.navigator.push({
                screen: 'Buy4',
                title: '상품정보',
                passProps: {
                    item: item
                }
            }
        )

    };

    componentWillMount() {
        console.log(this.props.category);
        console.log(this.props.detailCategory);
        console.log(this.props.status);
        console.log(this.props.year + " " + this.props.season);
        console.log(this.props.minPrice);
        console.log(this.props.maxPrice);

        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(ItemActionCreator.postItems(
                token,
                this.props.category,
                this.props.detailCategory,
                this.props.status,
                this.props.year + " " + this.props.season,
                this.props.maxPrice,
                this.props.minPrice,
                this.state.nextIndex,
            ));
        });
    }

    loadMoreItems = () => {
        if (this.state.loading === false) {
            console.log("end reach");
            this.setState({
                loading: true
            })
            AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
                this.props.dispatch(ItemActionCreator.postItems(
                    token,
                    this.props.category,
                    this.props.detailCategory,
                    this.props.status,
                    this.props.year + " " + this.props.season,
                    this.props.maxPrice,
                    this.props.minPrice,
                    this.state.nextIndex,
                ));
            });
        }
    }
    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };
    _renderItem = ({item}) => (
        <TouchableOpacity
            onPress={(item) => {
                this.goToBuyScreen4(item);
            }}>
            <Card>
                <CardItem header>
                    <Text>{item.item_name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        {item.image_url}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{item.price}원</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );

    render() {
        console.log("#########");
        console.log(this.state.items);
        console.log("#########");
        return (
            <Container style={{backgroundColor: 'white'}}>

                {
                    (this.state.items == null) ?
                        (<Content><ActivityIndicator
                            size="large"
                            color="#0000ff"/></Content>)
                        :
                        (
                            <Content contentContainerStyle={{flex: 1}}>
                                <FlatList
                                    keyExtractor={this._keyExtractor}
                                    data={this.state.items.result}
                                    renderItem={this._renderItem}
                                    ListFooterComponent={this.renderFooter}
                                    onEndReached={() => {
                                        this.loadMoreItems()
                                    }}
                                    onEndReachedThreshold={1}
                                />
                            </Content>
                        )
                }

            </Container>
        )

    }

}

export default (BuyScreen3 = connect(mapStateToProps)(BuyScreen3));

