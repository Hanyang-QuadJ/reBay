import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import { ListItem, Container, Content, Input } from 'native-base';

import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand

    };
};

class BuyScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    constructor(props) {
        super(props);
        this.state = {
            currentBrand: this.props.brand.brands
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if(event.id === "willAppear"){
            console.log("1")

        }

    }
    filterBySearchBar(text) {
        const brands = [];
        if (this.props.brand != null) {
            this.props.brand.brands.forEach(function (val, index) {
                if (val.brand_name.indexOf(text) !== -1) {
                    brands.push(val);
                }
            })
        }
        this.setState({
            currentBrand: brands
        });
    }
    _keyExtractor = (item, index) => item.id.toString();

    _renderItem = ({item}) => (
        <ListItem button={true} onPress={() => {
            this.props.navigator.push({
                    screen: 'SellFilter',
                    title: '상품정보',

                }
            )
        }}>
            <Text>{item.brand_name}</Text>
        </ListItem>
    );

    render() {
        console.log("2");
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content contentContainerStyle={{flex: 1}}>
                    <View style={styles.searchBar}>
                        <Input style={styles.itemStyle} placeholder='브랜드를 검색하세요' onChangeText={(text) => this.filterBySearchBar(text)}/>
                    </View>
                    <FlatList
                        keyExtractor={this._keyExtractor}
                        data={this.state.currentBrand}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
        )
    }
}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
