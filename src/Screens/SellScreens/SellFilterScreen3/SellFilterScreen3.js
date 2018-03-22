import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {
    Container,
    Text,
    Content,
    Button,

} from 'native-base';
import jsonData from '../../../Constants/data'
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent'
import StepHeader from '../../../Components/StepHeader/StepHeader';
import styles from './style';
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
    return {};
};

class SellFilterScreen3 extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;

    constructor(props) {
        super(props);
        this.state = {
            selectedFullBox: 0,
            fullBox: jsonData.fullBox,
            selectedWarantee: 0,
            warantee: jsonData.warantee,
            selectedDomestic: 0,
            domestic: jsonData.domestic,
            selectedRefund: 0,
            refund: jsonData.refund
        };
    }

    goToDetail = () => {
        let pic_list = this.props.pic_list;
        let item_name = this.props.item_name;
        let brand_id = this.props.brand_id;
        let price = this.props.price;
        let size = this.props.size;
        let season = this.props.season;
        let category_1 = this.props.category_1;
        let category_2 = this.props.category_2;
        let item_status = this.props.item_status;
        let fullbox = this.state.fullBox[this.state.selectedFullBox].index;
        let warantee = this.state.warantee[this.state.selectedWarantee].index;
        let domestic = this.state.domestic[this.state.selectedDomestic].index;
        let refund = this.state.refund[this.state.selectedRefund].index;

        this.props.navigator.push({
            screen:'Detail',
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
                item_status:item_status,
                fullbox:fullbox,
                warantee:warantee,
                domestic:domestic,
                refund:refund,
            }
        })

    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content scrollEnabled={false} contentContainerStyle={{flex:1}}>
                    <StepHeader text1="상품의" text2="상세정보는" text3="어떻게 되나요?"
                                color={commonStyle.PRIMARY_COLOR}
                                paddingBottom={30}
                                currentStep={5}
                                stepColor={commonStyle.TEXT_COLOR}
                                finalStep={6}/>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>구성상품</Text>
                        <View style={styles.row}>
                            {this.state.fullBox.map((fullBox, index) => (
                                <Button
                                    style={(index === this.state.selectedFullBox ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedFullBox: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedFullBox) ? styles.text : styles.notText}>{fullBox.name}</Text>
                                </Button>
                            ))}
                        </View>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>보증서</Text>
                        <View style={styles.row}>
                            {this.state.warantee.map((warantee, index) => (
                                <Button
                                    style={(index === this.state.selectedWarantee ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedWarantee: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedWarantee) ? styles.text : styles.notText}>{warantee.name}</Text>
                                </Button>
                            ))}
                        </View>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>구매</Text>
                        <View style={styles.row}>
                            {this.state.domestic.map((domestic, index) => (
                                <Button
                                    style={(index === this.state.selectedDomestic ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedDomestic: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedDomestic) ? styles.text : styles.notText}>{domestic.name}</Text>
                                </Button>
                            ))}
                        </View>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.label}>환불</Text>
                        <View style={styles.row}>
                            {this.state.refund.map((refund, index) => (
                                <Button
                                    style={(index === this.state.selectedRefund ? styles.checked : styles.notChecked)}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            selectedRefund: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={(index === this.state.selectedRefund) ? styles.text : styles.notText}>{refund.name}</Text>
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

export default (SellFilterScreen3 = connect(mapStateToProps)(SellFilterScreen3));

