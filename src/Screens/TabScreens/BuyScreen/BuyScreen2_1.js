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
import styles from './style2_1';
import * as commonStyle from '../../../Constants/commonStyle';
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';


const mapStateToProps = state => {
    return {};
};

class BuyScreen2_1 extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;
    constructor(props) {
        super(props);
        this.state = {
            selectedBrand: this.props.selectedBrand,
            maxPrice: 100000,

        };
    }

    goToBuyScreen3 = () => {

        this.props.navigator.push({
                screen: 'Buy3',
                title: '상품정보',
                passProps: {
                    category:this.props.category,
                    detailCategory:this.props.detailCategory,
                    status:this.props.status,
                    season:this.props.season
                }
            }
        )

    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content contentContainerStyle={{flex: 1}}>
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
                </Content>


                <FooterButtonComponent leftText="임시저장" rightText="다음으로" onPress={this.goToBuyScreen3}/>
            </Container>
        )

    }

}

export default (BuyScreen2_1 = connect(mapStateToProps)(BuyScreen2_1));

