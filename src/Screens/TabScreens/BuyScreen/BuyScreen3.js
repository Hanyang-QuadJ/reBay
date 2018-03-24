import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';

import styles from './style3';
import {
    AsyncStorage,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager,
    TouchableWithoutFeedback,
    Picker
} from 'react-native';
import * as ItemActionCreator from "../../../Actions/ItemAction";
import * as BrandActionCreator from "../../../Actions/BrandAction";
import LoadingActivity from '../../../Components/LoadingActivity/LoadingActivity'
import FastImage from "react-native-fast-image";
import ModalDropdown from 'react-native-modal-dropdown';

import {GoToHome} from "../../index";

import * as commonStyle from "../../../Constants/commonStyle";

const DEMO_OPTIONS_1 = ['싼순', '비싼순', '오래된순', '최신순'];
const mapStateToProps = state => {
    return {
        items: state.ItemReducer.items
    };
};

class BuyScreen3 extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;

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
            noItems: false,
            condition: 0,
        }

    }


    _goToItem(item) {
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
        console.log("########");
        console.log(this.props.brand_id);
        console.log("########");

        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(ItemActionCreator.postItems(
                token,
                this.props.brand_id,
                this.props.category,
                this.props.detailCategory,
                this.props.status,
                this.props.year + " " + this.props.season,
                this.props.maxPrice,
                this.props.minPrice,
                this.state.nextIndex,
                this.state.condition,
            )).then(
                async value => {
                    console.log("@@@@@@@@");
                    console.log(value);
                    console.log("@@@@@@@@@");
                    const imageArray = [];
                    if (value.result.length === 0) {
                        this.setState({noItems: true});
                    }
                    else {
                        for (let i = 0; i < value.result.length; i++) {
                            console.log(value.result[i].image_url);
                            imageArray.push({uri: value.result[i].image_url});
                        }
                        await FastImage.preload(imageArray);
                        await this.setState({
                            nextIndex: value.nextIndex,
                            items: value.result
                        });
                    }


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

        <TouchableWithoutFeedback onPress={() => this._goToItem(item)}>
            <View style={styles.items}>
                <View style={styles.itemImage}>
                    <FastImage
                        style={styles.itemImages}
                        resizeMode={FastImage.resizeMode.cover}
                        source={{uri: item.image_url}}/>
                </View>
                <Text>{this.props.brand}</Text>
                <Text
                    style={item.item_status === "새상품" ? styles.item_status_new : styles.item_status_old}>{item.item_status}</Text>
                <Text style={styles.item_name}>{item.item_name}</Text>
                <Text style={styles.item_price}>￦{item.price}</Text>
            </View>
        </TouchableWithoutFeedback>

    );
    goToItem = () => {
        this.props.navigator.push({
            screen: 'Buy4'
        })

    };
    _keyExtractor = (item, index) => item.id.toString();
    _handleEnd = async () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            console.log("가즈아!!!");
            await this.setState({loading: true});
            await AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
                this.props.dispatch(ItemActionCreator.postItems(
                    token,
                    this.props.brand_id,
                    this.props.category,
                    this.props.detailCategory,
                    this.props.status,
                    this.props.year + " " + this.props.season,
                    this.props.maxPrice,
                    this.props.minPrice,
                    this.state.nextIndex,
                    this.state.condition,
                )).then(async value => {
                    await this.setState({items: [...this.state.items, ...value.result]}, () => {
                        console.log(this.state.items);
                    });
                    await this.setState({nextIndex: value.nextIndex});
                    await this.setState({loading: false});
                });
            });
            this.onEndReachedCalledDuringMomentum = true;
        }

    };

    async _dropdown_onSelect(idx, value) {
        await this.setState({
            condition: idx,
            nextIndex: 0
        })
        await AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(ItemActionCreator.postItems(
                token,
                this.props.brand_id,
                this.props.category,
                this.props.detailCategory,
                this.props.status,
                this.props.year + " " + this.props.season,
                this.props.maxPrice,
                this.props.minPrice,
                this.state.nextIndex,
                this.state.condition,
            )).then(
                async value => {
                    console.log("@@@@@@@@");
                    console.log(value);
                    console.log("@@@@@@@@@");
                    const imageArray = [];
                    if (value.result.length === 0) {
                        this.setState({noItems: true});
                    }
                    else {
                        for (let i = 0; i < value.result.length; i++) {
                            console.log(value.result[i].image_url);
                            imageArray.push({uri: value.result[i].image_url});
                        }
                        await FastImage.preload(imageArray);
                        await this.setState({
                            nextIndex: value.nextIndex,
                            items: value.result
                        });
                    }


                });
        });

    }

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                {
                    this.state.items == null ?
                        <LoadingActivity/>
                        :

                        this.state.noItems == true ?
                            <Text>No Items</Text>
                            :
                            <View>
                                <ModalDropdown style={styles.dropdown_6}
                                               options={DEMO_OPTIONS_1}
                                               onSelect={(idx, value) => this._dropdown_onSelect(idx, value)}
                                               defaultIndex={0}
                                               defaultValue={"싼순"}>

                                </ModalDropdown>

                                <FlatList
                                    contentContainerStyle={styles.container}
                                    horizontal={false}
                                    numColumns={2}
                                    keyExtractor={this._keyExtractor}
                                    data={this.state.items}
                                    renderItem={this._renderItem}
                                    ListFooterComponent={this.renderFooter}
                                    onEndReached={this._handleEnd}
                                    onMomentumScrollBegin={() => {
                                        this.onEndReachedCalledDuringMomentum = false
                                    }}
                                    onEndReachedThreshold={0}
                                />
                            </View>


                }
            </View>
        )
    }
}

export default (BuyScreen3 = connect(mapStateToProps)(BuyScreen3));

