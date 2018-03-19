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
import {Container, Text, Content, Button, Item, Input, ListItem, List, Icon} from 'native-base';
import FooterButtonComponent from '../../Components/FooterButtonComponent/FooterButtonComponent';


import styles from './style';
import * as commonStyle from "../../Constants/commonStyle";

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand
    };
};

class BrandScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    // static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {
            currentBrand: this.props.brand.brands,
            inputStatus:false
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }

    filterBySearchBar(text) {
        console.log(text);
        const brands = [];
        if(text.length > 0){
            this.setState({inputStatus:true})
        }
        else{
            this.setState({inputStatus:false})
        }

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
    _renderItem2= ({}) => {

    };

    _renderItem = ({item}) => (

        <ListItem  style={styles.brandList} button={true} onPress={() => {
            this.props.navigator.push({
                    screen: 'SellFilter',
                    title: '상품정보',
                    passProps: {
                        brandName: item.brand_name,
                        brandID: item.id,
                        pic_list: this.props.base64
                    }
                }
            )
        }}>
            <Text>{item.brand_name}</Text>
        </ListItem>
    );
    _renderHeader = () => {
        return (
            <View style={{zIndex:200, backgroundColor:"white"}}>
                <View style={styles.title}>
                    <Text style={styles.title__text}>어떤</Text>
                    <Text style={styles.title__text}>브랜드를</Text>
                    <Text style={styles.title__text}>찾고 계신가요?</Text>
                </View>
                <View style={styles.searchBar}>
                    <Icon name="ios-search" size={30} style={styles.searchBar__icon}/>
                    <Input style={styles.itemStyle}
                           onChangeText={(text) => this.filterBySearchBar(text)}/>
                </View>
            </View>
        )


    };

    render() {
        console.log(this.state);
        return (
            <Container style={{backgroundColor: 'white'}}>
                <View style={{flex:1}}>
                    <FlatList
                        keyExtractor={this._keyExtractor}
                        data={this.state.currentBrand}
                        renderItem={this.state.inputStatus === false ? this._renderItem2 :this._renderItem}
                        ListHeaderComponent={this._renderHeader}
                        stickyHeaderIndices={[0]}
                    />
                    <FooterButtonComponent leftText="임시저장" rightText="다음으로"/>
                </View>
            </Container>
        )
    }
}

export default (BrandScreen = connect(mapStateToProps)(BrandScreen));
