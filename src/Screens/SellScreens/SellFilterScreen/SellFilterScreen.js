import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
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
            item_name:null,
            item_price:null,
            item_size:null,

        };
    }

    goToCategory = () => {
        let pic_list = this.props.pic_list;
        let item_name = this.state.item_name;
        let brand_id = this.props.brandID;
        let price = this.state.item_price;
        let size = this.state.item_size;

        // console.log(pic_list, item_name, brand_id, price, size, season, category_1, category_2, item_status, fullbox, warantee, domestic, refund)
        this.props.navigator.push({
            screen:'SellFilter2',
            title:'카테고리',
            passProps:{
                pic_list:pic_list,
                item_name:item_name,
                brand_id:brand_id,
                price:price,
                size:size
            }
        })

    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content contentContainerStyle={{flex:1}}>
                    <View style={styles.status}>

                    </View>
                    <View style={styles.inputArea}>
                        <InputComponent icon="ios-search"
                                        placeholder="상품명"
                                        onChangeText={(item_name) => this.setState({item_name})}
                        />
                        <InputComponent icon="logo-usd"
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
            </Container>
        )

    }

}

export default (SellFilterScreen = connect(mapStateToProps)(SellFilterScreen));

