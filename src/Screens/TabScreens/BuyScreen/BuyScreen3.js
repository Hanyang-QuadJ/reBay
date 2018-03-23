import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';

import styles from './style3';
import {AsyncStorage, View, FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import * as ItemActionCreator from "../../../Actions/ItemAction";
import * as BrandActionCreator from "../../../Actions/BrandAction";
import LoadingActivity from '../../../Components/LoadingActivity/LoadingActivity'

const mapStateToProps = state => {
    return {
        items: state.ItemReducer.items
    };
};

class BuyScreen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            category: this.props.category,
            detailCategory: this.props.detailCategory,
            status: this.props.status,
            season: this.props.season,
            loading: false,
            nextIndex: 0,
            reachEnd: 0,
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

        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(ItemActionCreator.postItems(
                token,
                this.props.category,
                this.props.detailCategory,
                this.props.status,
                this.props.year + " " + this.props.season,
                this.props.maxPrice,
                this.props.minPrice,
                this.state.nextIndex
            )).then(value => {
                this.setState({nextIndex: value.nextIndex});
                this.setState({items: value.result});
            });
        });
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
    _keyExtractor = (item, index) => item.id.toString();
    _handleEnd = async () => {
        if(!this.onEndReachedCalledDuringMomentum) {
            console.log("가즈아!!!");
            await this.setState({loading: true});
            await AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
                this.props.dispatch(ItemActionCreator.postItems(
                    token,
                    this.props.category,
                    this.props.detailCategory,
                    this.props.status,
                    this.props.year + " " + this.props.season,
                    this.props.maxPrice,
                    this.props.minPrice,
                    this.state.nextIndex,
                )).then(async value => {
                    await this.setState({items: [...this.state.items, ...value.result]});
                    await this.setState({nextIndex: value.nextIndex});
                    await this.setState({loading: false});
                });
            });
            this.onEndReachedCalledDuringMomentum = true;
        }

    };


    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                {
                    this.state.items == null ?
                        <LoadingActivity/>
                        :
                        <FlatList
                            keyExtractor={this._keyExtractor}
                            data={this.state.items}
                            renderItem={this._renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReached={this._handleEnd}
                            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false }}
                            onEndReachedThreshold={0}
                        />
                }
            </View>
        )
    }
}

export default (BuyScreen3 = connect(mapStateToProps)(BuyScreen3));

