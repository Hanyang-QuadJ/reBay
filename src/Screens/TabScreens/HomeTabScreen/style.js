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
    },
    itemList:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:"space-between"

    },
    itemLeft:{
        width:window.width/2.7,
        flexDirection:'column',
        marginLeft:30,
        marginTop:25,

    },
    itemRight:{
        width:window.width/2.7,
        flexDirection:'column',
        marginRight:30,
        marginTop:25,


    },
    itemImage:{
        width: null,
        height: 88,
        borderRadius:2
    },
    item_brand:{
        marginTop:2,
        fontSize:17,
        fontWeight:"700"

    },
    item_name:{
        fontSize:15,
        fontWeight:"500"
    },
    item_status:{
        marginTop:5,
        fontSize:13

    },
    item_price:{

    }



});

export default styles