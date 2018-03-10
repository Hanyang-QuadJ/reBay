import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
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
            <View>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        {this.props.icon === "" ? <View><Text style={styles.emptyText}> </Text></View> :
                            <Icon type={this.props.iconType} size={this.props.iconSize} name={this.props.icon}/>
                        }
                    </View>
                    <View style={[styles.input, this.props.style]}>
                        <Input placeholder={this.props.placeholder}
                               onChangeText={this.props.onChangeText}
                               autoCapitalize="none"
                               autoCorrect={false}
                               value={this.props.value}
                               seccureTextEntry={this.props.secureTextEntry}
                        />
                    </View>
                </View>
            </View>
        )
    }

}

export default (InputComponent = connect(mapStateToProps)(InputComponent));