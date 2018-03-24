import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({


    searchBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginBottom:20,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        flex:2,
        paddingVertical:30,
        justifyContent:'center',
    },

    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,
        marginHorizontal:30,
    },

    status:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:30,
        paddingRight:30,
        alignItems:"flex-end"

    },
    statusText:{
        fontSize:13,
        fontWeight:'700',
        color:commonStyle.PRIMARY_COLOR,

    },
    statusStrong:{
        fontSize:30,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,

    },


    blank:{
        display:"none"
    },

    itemStyle:{
        borderColor:commonStyle.BORDER_COLOR,
        borderBottomWidth:1,

    },

    brandList:{
        borderColor:commonStyle.BORDER_COLOR,
        marginLeft:30,
        marginRight:30,
    },
    brand:{
        color:commonStyle.TEXT_COLOR
    },
    choice:{
        borderRadius:50,
        height:30,
        borderColor:commonStyle.PRIMARY_COLOR
    },
    choiceText:{
        fontSize:13,
        color:commonStyle.PRIMARY_COLOR
    },




});

export default styles