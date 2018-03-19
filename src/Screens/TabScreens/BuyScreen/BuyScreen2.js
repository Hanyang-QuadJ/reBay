import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Slider, ScrollView} from 'react-native';
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
    FooterTab,

} from 'native-base';
import jsonData from '../../../Constants/data'
import styles from './style2';


const mapStateToProps = state => {
    return {};
};

class BuyScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBrand: this.props.selectedBrand,
            selectedCategory: 0,
            selectedDetailCategory: 0,
            category: jsonData.category,
            selectedItemStatus: 0,
            item_status: jsonData.item_status,
            selectedSeason: 0,
            season: jsonData.season,
            maxPrice: 100000,

        };
    }

    goBack() {
        this.props.navigation.goBack(null)
    }

    gotoBuyScreen3() {
        // this.props.navigation.navigate('BuyScreen3',{
        //     category:this.state.category[this.state.selectedCategory].name,
        //     detailCategory:this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name,
        //     status:this.state.item_status[this.state.selectedItemStatus].name,
        //     season:this.state.season[this.state.selectedSeason].name,
        // });
        // console.log(this.state.category[this.state.selectedCategory].name);
        // console.log(this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name)
        this.props.navigator.push({
                screen: 'Buy3',
                title: '상품정보',
                passProps: {
                    category:this.state.category[this.state.selectedCategory].name,
                    detailCategory:this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name,
                    status:this.state.item_status[this.state.selectedItemStatus].name,
                    season:this.state.season[this.state.selectedSeason].name
                }
            }
        )

    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>

                <Content contentContainerStyle={{flex: 1}}>
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
                                                style={(index === this.state.selectedDetailCategory) ? styles.text : styles.notText}>{category.name}</Text>
                                        </Button>
                                    )))
                            }

                        </ScrollView>
                    </View>
                    <View style={styles.rowContainer}>

                        <Text style={styles.label}>상품상태</Text>

                        <ScrollView style={styles.row} horizontal={true}>
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
                                        style={(index === this.state.selectedItemStatus) ? styles.text : styles.notText}>{item_status.name}</Text>
                                </Button>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>시즌</Text>
                        <ScrollView style={styles.row} horizontal={true}>
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
                                        style={(index === this.state.selectedSeason) ? styles.text : styles.notText}>{season.name}</Text>
                                </Button>
                            ))}
                        </ScrollView>
                    </View>
                </Content>
                <Text>{this.state.maxPrice / 10000} 만원</Text>
                <Slider step={100000} minimumValue={100000} maximumValue={1000000} onValueChange={(value) => {
                    this.setState({
                        maxPrice: value
                    })
                }}/>
                <Slider step={100000} minimumValue={100000} maximumValue={1000000} onValueChange={(value) => {
                    this.setState({
                        minPrice: value
                    })
                }}/>


                <Button onPress={this.gotoBuyScreen3.bind(this)}><Text>확인</Text></Button>
            </Container>
        )

    }

}

export default (BuyScreen2 = connect(mapStateToProps)(BuyScreen2));

