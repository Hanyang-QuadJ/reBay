import React, {Component} from 'react';
import {connect} from 'react-redux';
import {

    View,
    FlatList,
    Animated,

} from 'react-native';
import {Container, Text, Content, Button, Item, Input, ListItem, List, Icon} from 'native-base';


const HEADER_HEIGHT = 200;
const COLLAPSED_HEIGHT = 20;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand
    };
};

class BuyScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    // static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {
            currentBrand: [],
            inputStatus: false,
            refreshing:false,
            scroll: new Animated.Value(0) ,
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }

    filterBySearchBar(text) {
        console.log(text);
        const brands = [];
        if (text.length > 0) {
            this.setState({inputStatus: true})
        }
        else {
            this.setState({inputStatus: false})
        }

        if (this.props.brand != null) {
            this.props.brand.brands.forEach(function (val, index) {
                if (val.brand_name.indexOf(text) !== -1||val.brand_name_kor.indexOf(text) !== -1) {
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
    _renderItem2 = ({}) => {

    };

    _renderItem = ({item}) => (

        <ListItem style={styles.brandList} button={true} onPress={() => {
            this.props.navigator.push({
                    screen: 'Buy2',
                    title: '상품정보',
                    passProps: {
                        selectedBrand: item.brand_name,

                    }
                }
            )
        }}>
            <Text>{item.brand_name}</Text>
        </ListItem>
    );
    _renderHeader = () => {


    };

    render() {
        console.log(this.state);
        const translateY = this.state.scroll.interpolate({
            inputRange: [0.001, SCROLLABLE_HEIGHT],
            outputRange: [0.001, -SCROLLABLE_HEIGHT],
            extrapolate: 'clamp',
        });


        return (
            <Container style={{backgroundColor: 'white'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Animated.View style={{

                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor:"white",
                        zIndex: 10,
                        transform: [{translateY}]
                    }}>
                        <View style={styles.title}>
                            <Text style={styles.title__text}>찾으시는</Text>
                            <Text style={styles.title__text}>브랜드는</Text>
                            <Text style={styles.title__text}>무엇인가요?</Text>
                        </View>
                        <View style={styles.searchBar}>
                            <Icon name="ios-search" size={30} style={styles.searchBar__icon}/>
                            <Input style={styles.itemStyle}
                                   onChangeText={(text) => this.filterBySearchBar(text)}/>
                        </View>
                    </Animated.View>
                    <AnimatedFlatList contentContainerStyle={{paddingTop:240}}
                                      keyboardShouldPersistTaps={'always'}
                                      keyboardDismissMode="on-drag"
                                      scrollEventThrottle={1}
                                      keyExtractor={this._keyExtractor}
                                      data={this.state.currentBrand}
                                      renderItem={this._renderItem}
                                      onScroll={Animated.event(
                                          [{nativeEvent: {contentOffset: {y: this.state.scroll}}}],
                                          {useNativeDriver: true}
                                      )}
                    />
                </View>
            </Container>
        )
    }
}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
