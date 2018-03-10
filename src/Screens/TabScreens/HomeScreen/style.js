import { StyleSheet } from 'react-native';
import commonStyle from '../../index';
const style = StyleSheet.create({
    container:{

    },
    wrapper:{
        height:180,
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
        width:375
    },
    activeTabStyle: {

    },
    activeTabTextStyle: {
        color:commonStyle.PRIMARY_COLOR,
        fontSize:13
    },
    tabTextStyle: {
        fontSize:13
    },
    tabUnderLine:{
        height:2,
        backgroundColor:commonStyle.PRIMARY_COLOR
    }

});
export default style
