
import React, {Component} from 'react';
import {FlatList, View, AsyncStorage, Image, Dimensions, ScrollView, Animated, RefreshControl} from 'react-native'
import { Icon, Button, Text } from 'native-base';

import {connect} from 'react-redux';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';


import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};




const mapStateToProps = state => {
    return {
        data: state.DefaultReducer.data,
        loading: state.DefaultReducer.loading
    };
};


class HomeScreen extends Component {
    static navigatorStyle = commonStyle.NavigationStyle;

    static navigatorButtons = {

        rightButtons: [
            {
                title: 'Cart', // for a textual button, provide the button title (label)
                id: 'cart', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                // testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
                // disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
                // disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                // showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
                // buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
                // buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                // buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            },
            // {
            //     icon: <Icon name="ios-cart" size={26}/>,// for icon button, provide the local image asset name
            //     id: 'cart'
            // }
        ]
    };



    constructor(props) {
        super(props);

        // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            refreshing: false,
            index: 0,
            scroll: 0,
            routes: [
                {key: 'first', title: '카테고리 추천'},
                {key: 'second', title: '신규 상품'},
            ],
        }

    }


    componentDidUpdate(){

    }

    _handleIndexChange = (index) => this.setState({index});
    _renderHeader = props => {
        return (
            <View>
                <TabBar {...props} indicatorStyle={{backgroundColor: commonStyle.PRIMARY_COLOR}}
                        labelStyle={{color: commonStyle.PRIMARY_COLOR, fontSize:13, marginVertical:1}}
                        style={{backgroundColor: "white",}}/>
            </View>
        )
    };
    goItem = () => {
        this.props.navigator.showModal({
            screen:'Picture',
            animationType: 'slide-up'
        })

    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case 'first':
                return <View>

                </View>;
            case 'second':
                return <View style={{backgroundColor: '#673ab7', flex: 1}}/>;
            default:
                return null;
        }
    };


    render() {



        return (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />
        )
    }

}

export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

