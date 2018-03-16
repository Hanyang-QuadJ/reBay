import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
import  commonStyle from '../index'
const styles = StyleSheet.create({
    wrapper:{
        height:130,
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
        width:window.width
    },

});

export default styles