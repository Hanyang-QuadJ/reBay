import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import {Button} from 'native-base';
import { GoToHome} from "../index";
import { Navigation } from 'react-native-navigation';
import * as DefaultAction from '../../Actions/DefaultAction';
import  styles from './style';

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


    goToTab = () => {
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

