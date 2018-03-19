import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    searchBar:{
        flex:0.1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:15,

    },
    title:{
        flex:0.4,
        marginVertical:30,
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
    }




});

export default styles