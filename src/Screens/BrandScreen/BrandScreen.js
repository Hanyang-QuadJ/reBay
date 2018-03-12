import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager
} from 'react-native';
import {Container, Text, Content, Button, Item, Input, ListItem} from 'native-base';
import FooterButtonComponent from '../../Components/FooterButtonComponent/FooterButtonComponent';


import styles from './style';
import * as commonStyle from "../../Constants/commonStyle";

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand
    };
};

class BrandScreen extends Component {
    // static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {
            currentBrand: this.props.brand.brands
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

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


    _onPressItem = (item) => {


    };

    _renderItem = ({item}) => (
            <ListItem button={true} onPress={() => {
                this.props.navigator.push({
                        screen: 'SellFilter',
                        title: '상품정보',
                        passProps: {
                            brandName:item.brand_name,
                            brandID:item.id,
                            pic_list:this.props.base64
                        }
                    }
                )
            }}>
                <Text>{item.brand_name}</Text>
            </ListItem>
    );

    render() {

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
                <FooterButtonComponent leftText="임시저장" rightText="다음으로"/>
            </Container>
        )
    }
}

export default (BrandScreen = connect(mapStateToProps)(BrandScreen));
