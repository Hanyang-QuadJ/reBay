import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    row:{
        flexDirection:"row",

    },
    checked:{
        backgroundColor:commonStyle.PRIMARY_COLOR
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    notChecked:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:commonStyle.PRIMARY_COLOR
    },
    notText:{
        color:commonStyle.PRIMARY_COLOR
    },

    inputArea:{
        flex:4
    },
    title:{
        flex:3,
        paddingVertical:30,
        paddingLeft:30,
        justifyContent:'center',
    },
    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,
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

});

export default styles