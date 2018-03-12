import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from '../index';
const window = Dimensions.get('window');

const style = StyleSheet.create({
    userInfo:{
        flex:0.6,
        justifyContent:'center',

    },
    userInfoContainer:{
        marginLeft:20,
        flex:1,
        flexDirection:'row',

        alignItems:'center'

    },
    thumbnailArea:{

    },
    thumbnail:{
        width:46,
        height:46,
        borderRadius:23
    },
    pictureArea:{
        flex:3
    },
    itemInfo:{
        flex:1,
        justifyContent:'center'
    },

    itemInfoContainer:{
        marginLeft:20

    },
    userInfoArea:{
        marginLeft:13,

    },
    userInfoText:{
        fontWeight:'600',
        color:commonStyle.PRIMARY_COLOR
    },

    wrapper:{
    },
    slide1: {
        flex:1,
        backgroundColor: '#4c586f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:window.width,
        flex:1,

    },
    item_name:{
        fontSize:16,
        color:commonStyle.PRIMARY_COLOR

    },

    item_price:{
        marginTop:3,
        fontSize:19,
        color:commonStyle.PRIMARY_COLOR,

    },




});
export default style