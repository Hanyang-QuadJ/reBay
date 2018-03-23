import { StyleSheet,  Dimensions } from 'react-native';
const window = Dimensions.get('window');

import  commonStyle from '../index'
const styles = StyleSheet.create({
    itemList:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:"space-between",
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
        marginTop:5,
        color:commonStyle.TEXT_COLOR,
        fontSize:17,
        fontWeight:"700"
    },
    item_name:{
        marginTop:3,
        fontSize:13,
        color:commonStyle.TEXT_COLOR,
        fontWeight:"500"
    },
    item_status_new:{
        marginTop:7,
        fontSize:13,
        color:commonStyle.SUB_COLOR,

    },
    item_status_old:{
        marginTop:7,
        fontSize:13,
        color:commonStyle.TEXT_COLOR,

    },
    item_price:{
        color:commonStyle.TEXT_COLOR,
        fontSize:15,
        fontWeight:"600",
    }

});

export default styles