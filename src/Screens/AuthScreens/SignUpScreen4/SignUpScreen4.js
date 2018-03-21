import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AsyncStorage,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager
} from 'react-native';
import {Container, Content, Icon} from 'native-base';
import styles from './style';
import * as commonStyle from '../../../Constants/commonStyle';
import {GoToHome} from "../../index";
import StepHeader from '../../../Components/StepHeader/StepHeader';
import InputComponent from '../../../Components/InputComponent/InputComponent';
import RoundButton from '../../../Components/RoundButton/RoundButton';
import * as LoginAction from '../../../Actions/LoginAction';
import * as RecommendAction from "../../../Actions/RecommendAction";
import * as BrandAction from "../../../Actions/BrandAction";
import FastImage from "react-native-fast-image";

const mapStateToProps = state => {
    return {};
};

class SignUpScreen4 extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordConfirm: "",
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }

    signIn = () => {
        const { username, email, phone } = this.props;
        this.props.dispatch(LoginAction.postSignUp(username, email, phone, this.state.password)).then(async (value) => {
            await this.props.dispatch(BrandAction.getBrand());
            await this.props.dispatch(RecommendAction.getRecommend()).then(
                async value2 => {
                    let imageArray = [];
                    for (let i = 0; i < value2.length; i++) {
                        imageArray.push({uri: value2[i].image_url});
                    }
                    await FastImage.preload(imageArray);
                    await GoToHome();
                });
        })

    };

    render() {
        console.log(this.props);

        return (
            <View style={{flex: 1, backgroundColor: commonStyle.PRIMARY_COLOR}}>
                <View style={styles.header}>
                    <StepHeader text1="" text2="비밀번호를" text3="입력해주세요." color={commonStyle.SECONDARY_COLOR}
                                paddingBottom={50} currentStep={4} finalStep={4}/>
                </View>
                <View style={styles.body}>

                    <InputComponent image={require("../../../Assets/dress.png")} placeholder="비밀번호"
                                    onChangeText={(password) => this.setState({password})}
                                    placeholderTextColor={commonStyle.BORDER_COLOR}
                                    secureTextEntry={true}
                                    textColor={commonStyle.SECONDARY_COLOR}
                                    style={{borderColor: commonStyle.SECONDARY_COLOR}}/>
                    <View style={{marginTop: 20}}>
                        <InputComponent image={require("../../../Assets/dress.png")} placeholder="비밀번호 확인"
                                        onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                                        secureTextEntry={true}
                                        placeholderTextColor={commonStyle.BORDER_COLOR}
                                        textColor={commonStyle.SECONDARY_COLOR}
                                        style={{borderColor: commonStyle.SECONDARY_COLOR}}/>
                    </View>
                </View>
                <View>
                    <RoundButton backgroundColor={commonStyle.SECONDARY_COLOR} text="회원가입"
                                 textColor={commonStyle.PRIMARY_COLOR}
                                 onPress={this.signIn}/>
                </View>

            </View>
        )
    }
}

export default (SignUpScreen4 = connect(mapStateToProps)(SignUpScreen4));
