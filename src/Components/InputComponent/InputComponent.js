import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Image} from 'react-native';
import {Icon, Input} from 'native-base'
import styles from './style';

const mapStateToProps = state => {
    return {};
};

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
                <View style={[styles.container,{marginTop:this.props.marginTop}]}>
                    <View style={styles.icon}>
                        <Image source={this.props.image}/>
                    </View>
                    <View style={[styles.input, this.props.style]}>
                        <Input placeholder={this.props.placeholder}
                               onChangeText={this.props.onChangeText}
                               style={{color:this.props.textColor && this.props.textColor}}
                               placeholderTextColor={this.props.placeholderTextColor}
                               autoCapitalize="none"
                               autoCorrect={false}
                               value={this.props.value}
                               secureTextEntry={this.props.secureTextEntry}
                        />
                    </View>
                </View>
        )
    }

}

export default (InputComponent = connect(mapStateToProps)(InputComponent));