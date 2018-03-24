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
import styles from './style2_1';
import * as commonStyle from '../../../Constants/commonStyle';
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';
import StepHeader from '../../../Components/StepHeader/StepHeader';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


const mapStateToProps = state => {
    return {};
};

class BuyScreen2_1 extends Component {
    static navigatorStyle = commonStyle.TabBarHidden;
    constructor(props) {
        super(props);
        this.state = {
            multiSliderValue: [10000, 100000],
            minPrice: 0,
            maxPrice: 100000
        };
    }

    goToBuyScreen3 = () => {

        this.props.navigator.push({
                screen: 'Buy3',
                title: '검색결과',
                passProps: {
                    category:this.props.category,
                    detailCategory:this.props.detailCategory,
                    status:this.props.status,
                    season:this.props.season,
                    year:this.props.year,
                    minPrice:this.state.minPrice,
                    maxPrice:this.state.maxPrice,
                }
            }
        )

    };

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
            minPrice: values[0],
            maxPrice: values[1]
        });
    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content scrollEnabled={false} contentContainerStyle={{flex: 1}}>
                    <StepHeader text1="찾으시는" text2="가격대는" text3="어떻게 되나요?"
                                color={commonStyle.PRIMARY_COLOR}
                                stepColor={commonStyle.TEXT_COLOR}
                                paddingBottom={30}
                                currentStep={3}
                                finalStep={4}/>
                    <View style={{justifyContent:'center', flexDirection:"row", alignItems:'center', marginHorizontal:30,marginTop:60 }}>
                        <View style={styles.start}>
                            <Text style={styles.startText}>{Math.floor(this.state.multiSliderValue[0]/10000)}</Text>
                            <Text style={styles.text}>만원</Text>
                        </View>
                        <View style={styles.end}>
                            <Text style={styles.endText}>{Math.floor(this.state.multiSliderValue[1]/10000)}</Text>
                            <Text style={styles.text}>만원</Text>
                        </View>

                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', marginHorizontal:30, marginTop:20 }}>
                        <MultiSlider
                            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
                            sliderLength={280}
                            selectedStyle={{backgroundColor:commonStyle.PRIMARY_COLOR}}
                            onValuesChange={this.multiSliderValuesChange}
                            min={0}
                            max={1000000}
                            step={1}
                            allowOverlap
                            snapped
                        />
                    </View>


                </Content>


                <FooterButtonComponent leftText="임시저장" rightText="다음으로" onPress={this.goToBuyScreen3}/>
            </Container>
        )

    }

}

export default (BuyScreen2_1 = connect(mapStateToProps)(BuyScreen2_1));

