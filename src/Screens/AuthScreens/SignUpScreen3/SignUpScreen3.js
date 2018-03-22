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

const mapStateToProps = state => {
    return {};
};

class SignUpScreen3 extends Component {
    static navigatorStyle = commonStyle.NavigationStyleReverse;
    constructor(props) {
        super(props);
        this.state = {
            phone:""
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together

    }
    goToSignUp4 = () => {
        this.props.navigator.push({
            screen:"SignUp4",
            passProps:{
                username:this.props.username,
                email:this.props.email,
                phone:this.state.phone,
            },
            backButtonTitle:"휴대폰번호"
        })
    };

    render() {

        return (
            <View style={{flex:1, backgroundColor:commonStyle.PRIMARY_COLOR}}>
                <View style={styles.header}>
                    <StepHeader text1="" text2="휴대폰번호를" text3="입력해주세요." color={commonStyle.SECONDARY_COLOR}
                                paddingBottom={50} currentStep={3} stepColor={commonStyle.SECONDARY_COLOR}  finalStep={4}/>
                </View>
                <View style={styles.body}>

                    <InputComponent image={require("../../../Assets/dress.png")} placeholder=""
                                    onChangeText={(phone) => this.setState({phone})}
                                    textColor={commonStyle.SECONDARY_COLOR}
                                    style={{borderColor:commonStyle.SECONDARY_COLOR}}/>

                </View>
                <View>
                    <RoundButton backgroundColor={commonStyle.SECONDARY_COLOR} text="다음으로" textColor={commonStyle.PRIMARY_COLOR}
                    onPress={this.goToSignUp4}/>
                </View>

            </View>
        )
    }
}

export default (SignUpScreen2 = connect(mapStateToProps)(SignUpScreen3));
