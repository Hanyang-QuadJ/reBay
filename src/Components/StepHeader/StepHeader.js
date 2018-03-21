import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Input, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
const mapStateToProps = state => {
    return {
    };
};
class StepHeader extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={[styles.title,{paddingBottom:this.props.paddingBottom}]}>
                    <Text style={[styles.title__text,{ color:this.props.color}]}>{this.props.text1}</Text>
                    <Text style={[styles.title__text,{ color:this.props.color}]}>{this.props.text2}</Text>
                    <Text style={[styles.title__text,{ color:this.props.color}]}>{this.props.text3}</Text>
                </View>
                <View style={[styles.status,{paddingBottom:this.props.paddingBottom}]}>
                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <Text style={[styles.statusStrong,{color:this.props.color}]}>{this.props.currentStep}</Text><Text style={[styles.statusText,{marginTop:14,color:this.props.color}]}>/{this.props.finalStep}</Text>
                    </View>
                    <Text style={[styles.statusText,{color:this.props.color}]}>단계</Text>
                </View>
            </View>



        );
    }
}

export default (StepHeader = connect(mapStateToProps)(StepHeader));
