import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {
    Container,
    Text,
    Content,
    Item,
    Input,

} from 'native-base';
import InputComponent from '../../../Components/InputComponent/InputComponent'
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent'
import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {};
};

class SellFilterScreen extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {
            item_name: null,
            item_price: null,
            item_size: null,

        };
    }

    goToCategory = () => {
        let brand_id = this.props.brandID;
        let pic_list = this.props.pic_list;
        let item_name = this.state.item_name;
        let price = this.state.item_price;
        let size = this.state.item_size;

        // console.log(pic_list, item_name, brand_id, price, size, season, category_1, category_2, item_status, fullbox, warantee, domestic, refund)
        this.props.navigator.push({
            screen: 'SellFilter2',
            title: '카테고리',
            passProps: {
                pic_list: pic_list,
                item_name: item_name,
                brand_id: brand_id,
                price: price,
                size: size
            }
        })

    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                    <Content scrollEnabled={false} contentContainerStyle={{flex: 1}}>
                        <View style={styles.title}>
                            <Text style={styles.title__text}>상품 이름,</Text>
                            <Text style={styles.title__text}>가격,</Text>
                            <Text style={styles.title__text}>사이즈는 무엇인가요?</Text>
                        </View>
                        <View style={styles.inputArea}>
                            <InputComponent icon="ios-search"
                                            placeholder="상품명"
                                            onChangeText={(item_name) => this.setState({item_name})}
                            />
                            <InputComponent icon="ios-pricetag-outline"
                                            placeholder="가격"
                                            onChangeText={(item_price) => this.setState({item_price})}
                            />
                            <InputComponent icon="ios-resize"
                                            placeholder="사이즈"
                                            onChangeText={(item_size) => this.setState({item_size})}
                            />
                        </View>
                    </Content>
                    <FooterButton leftText="임시저장" rightText="다음으로" onPress={this.goToCategory}/>
                </KeyboardAvoidingView>
            </Container>
        )

    }

}

export default (SellFilterScreen = connect(mapStateToProps)(SellFilterScreen));

