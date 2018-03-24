import { StyleSheet } from 'react-native';
import commonStyle from '../../index';

const style = StyleSheet.create({
    searchBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginBottom:15,
    },
    title:{

        paddingVertical:30,
        justifyContent:'center',

    },
    blank:{
        display:"none"
    },
    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,
        marginHorizontal:15,
    },
    itemStyle:{
        borderColor:commonStyle.BORDER_COLOR,
        borderBottomWidth:1,
        marginHorizontal:10,
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
    listArea:{

    }




});
export default style