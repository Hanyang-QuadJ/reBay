import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, Text } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
const mapStateToProps = state => {
    return {
    };
};
class FooterButtonComponent extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <Footer style={styles.footer}>
                <Button style={styles.button1}><Text style={styles.button1Text}>{this.props.leftText}</Text></Button>
                <Button onPress={this.props.onPress} style={styles.button2} ><Text style={styles.button2Text}>{this.props.rightText}</Text></Button>
            </Footer>


        );
    }
}

export default (FooterButtonComponent = connect(mapStateToProps)(FooterButtonComponent));
