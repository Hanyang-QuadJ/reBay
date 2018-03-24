import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, Text } from 'native-base';
import  styles  from './style';
import {connect} from "react-redux";
const mapStateToProps = state => {
    return {
    };
};
class FooterCart extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <Footer style={styles.footer}>
                <Button style={styles.button1}><Text style={styles.button1Text}>{this.props.firstText}</Text></Button>
                <Button style={styles.button2}><Text style={styles.button2Text}>{this.props.secondText}</Text></Button>
                <Button onPress={this.props.onPress} style={styles.button3} ><Text style={styles.button3Text}>{this.props.thridText}</Text></Button>
            </Footer>


        );
    }
}

export default (FooterCart = connect(mapStateToProps)(FooterCart));
