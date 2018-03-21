import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import { GoToHome } from "../../index";
import { Navigation } from 'react-native-navigation';
import * as LoginAction from '../../../Actions/LoginAction';
import commonStyle from '../../index'
import InputComponent from '../../../Components/InputComponent/InputComponent'
import {
    Container,
    Text,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Item,
    Input,
    Form,
    StyleProvider
} from 'native-base';
import styles from './styles';
import * as RecommendAction from "../../../Actions/RecommendAction";
import * as BrandAction from "../../../Actions/BrandAction";
import FastImage from "react-native-fast-image";

const mapStateToProps = state => {
    return {
        token: state.LoginReducer.token
    };
};

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }


    sendToAction = () => {
        this.props.dispatch(LoginAction.postLogin(this.state.email, this.state.password)).then(async (value) =>  {
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

        });
    };

    componentDidUpdate() {

    }

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>

                <Content contentContainerStyle={{flex: 1}}>
                    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
                        <View style={styles.logoContainer}>
                            <Text>REBAY LOGO</Text>
                        </View>

                        <View style={styles.formContainer}>
                            <View>
                                <View style={styles.container}>
                                    <View style={styles.icon}>
                                        <Icon type="MaterialIcons" name="person-outline"/>
                                    </View>
                                    <View style={styles.input}>
                                        <Input autoCapitalize="none" placeholder="아이디"
                                               onChangeText={(email) => this.setState({email})}
                                               value={this.state.email}/>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.container}>
                                    <View style={styles.icon}>
                                        <Icon type="MaterialIcons" name="lock-open"/>
                                    </View>
                                    <View style={styles.input}>
                                        <Input autoCapitalize="none" placeholder="비밀번호" secureTextEntry={true}
                                               onChangeText={(password) => this.setState({password})}
                                               value={this.state.password}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button full rounded onPress={this.sendToAction}
                                    style={{
                                        backgroundColor: "rgba(92, 99,216, 0.5)",
                                        height: 45,
                                        marginTop: 20,
                                        marginLeft: 30,
                                        marginRight: 30,
                                        borderColor: "transparent",
                                        borderWidth: 0,
                                        borderRadius: 7,
                                    }}>
                                <Text>로그인</Text>
                            </Button>
                            <Text style={{marginTop: 10}}>비밀번호를 잊어버리셨나요?</Text>
                        </View>
                    </KeyboardAvoidingView>

                </Content>

            </Container>
        )


    }

}

export default (SignInScreen = connect(mapStateToProps)(SignInScreen));

