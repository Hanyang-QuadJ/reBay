import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {
    Container,
    Text,
    Content,
    Item,
    Input,
    Form,
    Button,
    Badge,
    Header,
    Footer,
    Title,
    Left,
    Right,
    List,
    ListItem,
    FooterTab
} from 'native-base';
import jsonData from '../../../Constants/data'
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent'
import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {};
};

class SellFilterScreen2 extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;

    constructor(props) {
        super(props);
        this.state = {

            selectedBrand: [],
            selectedCategory: 0,
            selectedDetailCategory: 0,
            category: jsonData.category,
            selectedItemStatus: 0,
            item_status: jsonData.item_status,
            selectedYear: 0,
            year: jsonData.year,
            selectedSeason: 0,
            season: jsonData.season,

        };
    }

    goToDetail = () => {
        let pic_list = this.props.pic_list;
        let item_name = this.props.item_name;
        let brand_id = this.props.brand_id;
        let price = this.props.price;
        let size = this.props.size;
        let season = this.state.year[this.state.selectedYear].name +" "+this.state.season[this.state.selectedSeason].name;
        let category_1 = this.state.category[this.state.selectedCategory].name;
        let category_2 = this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name;
        let item_status = this.state.item_status[this.state.selectedItemStatus].name;

        // console.log(pic_list, item_name, brand_id, price, size, season, category_1, category_2, item_status, fullbox, warantee, domestic, refund)
        this.props.navigator.push({
            screen:'SellFilter3',
            title:'상세정보',
            passProps:{
                pic_list:pic_list,
                item_name:item_name,
                brand_id:brand_id,
                price:price,
                size:size,
                season:season,
                category_1:category_1,
                category_2:category_2,
                item_status:item_status
            }
        })

    };

    render() {
        console.log(this.props);
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content contentContainerStyle={{flex:1}}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>상위 카테고리</Text>
                        <ScrollView style={styles.row} horizontal={true}>
                            {this.state.category.map((category, index) => (
                                <Button
                                    style={(index === this.state.selectedCategory) ? styles.checked : styles.notChecked}
                                    key={index}
                                    onPress={() => {

                                        this.setState({
                                            selectedCategory: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedCategory) ? styles.text : styles.notText}>{category.name}</Text>
                                </Button>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>하위 카테고리</Text>
                        <ScrollView style={styles.row} horizontal={true}>
                            {
                                this.state.category[this.state.selectedCategory] === null ?
                                    (<Text>Empty</Text>)
                                    :

                                    (this.state.category[this.state.selectedCategory].detailCategory.map((category, index) => (
                                        <Button
                                            style={(index === this.state.selectedDetailCategory) ? styles.checked : styles.notChecked}
                                            key={index}
                                            onPress={() => {

                                                this.setState({
                                                    selectedDetailCategory: index
                                                })
                                            }}
                                        >
                                            <Text
                                                style={(index === this.state.selectedDetailCategory) ? styles.text  : styles.notText}>{category.name}</Text>
                                        </Button>
                                    )))
                            }

                        </ScrollView>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>상품상태</Text>

                        <View style={styles.row}>
                            {this.state.item_status.map((item_status, index) => (
                                <Button
                                    style={(index === this.state.selectedItemStatus) ? styles.checked : styles.notChecked}
                                    key={index}
                                    onPress={() => {

                                        this.setState({
                                            selectedItemStatus: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedItemStatus) ? styles.text  : styles.notText}>{item_status.name}</Text>
                                </Button>
                            ))}
                        </View>
                    </View>

                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>시즌</Text>
                        <ScrollView style={styles.row} horizontal={true}>
                            {this.state.year.map((year, index) => (
                                <Button
                                    style={(index === this.state.selectedYear ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedYear: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedYear) ? styles.text : styles.notText}>{year.name}</Text>
                                </Button>
                            ))}
                        </ScrollView>
                        <View style={styles.row}>
                            {this.state.season.map((season, index) => (
                                <Button
                                    style={(index === this.state.selectedSeason ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedSeason: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedSeason) ? styles.text  : styles.notText}>{season.name}</Text>
                                </Button>
                            ))}
                        </View>
                    </View>
                </Content>
                <FooterButton leftText="임시저장" rightText="다음으로" onPress={this.goToDetail}/>
            </Container>
        )

    }

}

export default (SellFilterScreen2 = connect(mapStateToProps)(SellFilterScreen2));

