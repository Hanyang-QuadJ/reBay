import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Input, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
import styles from './style';
import {connect} from "react-redux";
import Swiper from 'react-native-swiper';
import LoadingActivity from '../../Components/LoadingActivity/LoadingActivity';
import * as commonStyle from "../../Constants/commonStyle";
import FastImage from 'react-native-fast-image';

const mapStateToProps = state => {
    return {};
};

class Item extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const stars = [];
        const emptyStars = [];
        const starLength = 5;
        const userLength = this.props.grade;
        for (let i = 0; i < userLength; i++) {
            stars.push(<View key={i}><Icon name="ios-star"
                                           style={{fontSize: 12, color: commonStyle.PRIMARY_COLOR}}/></View>);
        }
        for (let i = 0; i < starLength - userLength; i++) {
            emptyStars.push(<View key={i}><Icon name="ios-star-outline"
                                                style={{fontSize: 12, color: commonStyle.PRIMARY_COLOR}}/></View>);
        }
        return (
            <View style={{flex: 1}}>
                <View style={styles.userInfo}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.thumbnailArea}>
                            <Image style={styles.thumbnail} source={require("../../Assets/yoon.png")}/>
                        </View>
                        <View style={styles.userInfoArea}>
                            <Text style={styles.userInfoText}>
                                {this.props.username === null ? <Text>******</Text> :
                                    this.props.username
                                }
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                {stars}
                                {emptyStars}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.pictureArea}>
                    {this.props.picture === undefined || this.props.picture === null ? <View style={styles.slide2}><LoadingActivity/></View>:
                        <Swiper style={styles.wrapper} showsButtons={false} activeDot={<View style={{backgroundColor: commonStyle.PRIMARY_COLOR ,
                            width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>}>
                            {this.props.picture.map((picture,index)=> {
                                return (
                                    <View key={picture.id} style={styles.slide1}>
                                        <FastImage style={styles.image}
                                                   source={{uri: picture.image_url}}
                                                   resizeMode="contain"
                                        />
                                    </View>
                                )

                            })}
                        </Swiper>
                    }
                </View>
                <View style={styles.itemInfo}>
                    <View style={styles.itemInfoContainer}>
                        <Text style={styles.brand_name}>{this.props.brand}</Text>
                        <Text style={styles.item_name}>{this.props.item_name}</Text>
                        <Text style={styles.item_price}>￦{this.props.price}</Text>
                    </View>
                </View>

                <View style={styles.itemDetail}>
                    <View style={styles.itemDetailContainer}>
                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>제품명</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{this.props.item_name}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>브랜드</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{this.props.brand}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>사이즈</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{this.props.size && this.props.size}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>발매 시즌</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{this.props.season && this.props.season}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>상세 설명</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{this.props.content && this.props.content}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>연관 태그</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentText}>캐쉬미어 가디건</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


        );
    }
}

export default (Item = connect(mapStateToProps)(Item));
