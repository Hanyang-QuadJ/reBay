import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Input, Left, Body, Right, Button, Icon, Title } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
import FastImage from "react-native-fast-image";
import { Text } from 'native-base';
const mapStateToProps = state => {
    return {
    };
};
class CategoryItem extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.itemList}>
                {this.props.item.map((data, index) => {
                    if ((index + 1) % 2 !== 0) {
                        return (
                            <View style={styles.itemLeft} key={index}>
                                <FastImage style={styles.itemImage}
                                           resizeMode={FastImage.resizeMode.cover}
                                           source={{uri: data.image_url}}/>
                                <Text style={styles.item_status}>{data.item_status}</Text>
                                <Text style={styles.item_brand}>PRADA</Text>
                                <Text style={styles.item_name}>{data.item_name}</Text>
                                <Text style={styles.item_price}>￦{data.price}</Text>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={styles.itemRight} key={index}>
                                <FastImage style={styles.itemImage}
                                           resizeMode={FastImage.resizeMode.cover}
                                           source={{uri: data.image_url}}/>
                                <Text style={styles.item_status}>{data.item_status}</Text>
                                <Text style={styles.item_brand}>PRADA</Text>
                                <Text style={styles.item_name}>{data.item_name}</Text>
                                <Text style={styles.item_price}>￦{data.price}</Text>
                            </View>
                        )
                    }
                })}
            </View>


        );
    }
}

export default (CategoryItem = connect(mapStateToProps)(CategoryItem));
