import { StyleSheet, Dimensions } from 'react-native';

import  commonStyle from '../../index'
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper:{
    },
    slide1: {
        flex:1,
        backgroundColor: '#4c586f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image:{
        resizeMode: 'contain',
        width:window.width
    }



});

export default styles