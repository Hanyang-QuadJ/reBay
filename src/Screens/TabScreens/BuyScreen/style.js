import { StyleSheet } from 'react-native';
import commonStyle from '../../index';

const style = StyleSheet.create({
    searchBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:15,
        marginBottom:20,
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
        borderColor:"transparent",
    },
    listArea:{

    }




});
export default style