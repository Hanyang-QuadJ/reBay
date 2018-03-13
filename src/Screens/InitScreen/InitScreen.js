import React, { Component } from 'react';
import { Text, View, AsyncStorage, Image } from 'react-native';
import { connect } from 'react-redux';
import {Button} from 'native-base';
import { GoToHome } from "../index";
import { Navigation } from 'react-native-navigation';
import * as BrandtAction from '../../Actions/BrandAction';
import * as DefaultAction from '../../Actions/DefaultAction';
import FastImage from 'react-native-fast-image';
import  styles from './style';
import * as DefaultActionCreator from "../../Actions/DefaultAction";

const mapStateToProps = state => {
    return {
        data:state.DefaultReducer.data
    };
};

class InitScreen extends Component {
    static navigatorStyle = {
        navBarHidden:true

    };

    constructor(props){
        super(props)

    }

    componentDidMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {

            if(value === null || value === undefined || value === ""){
                this.props.navigator.push({
                    screen: 'Tutorial',
                    animated:false
                });
            }
            else{
                this.goToTab();
            }
        })
    }


    goToTab = async () => {
        await this.props.dispatch(BrandtAction.getBrand());
        this.props.dispatch(DefaultAction.defaultFetch());
        GoToHome();
    };

    render() {
        console.log(this.props);
        return (
            <View style={{backgroundColor:'white'}}>
                <View>
                    <Text>Init Screen</Text>
                    <Button onPress={this.test}><Text>test</Text></Button>
                    <Button onPress={this.goToTab}><Text>test</Text></Button>

                </View>
            </View>
        )

    }

}
export default (InitScreen = connect(mapStateToProps)(InitScreen));

