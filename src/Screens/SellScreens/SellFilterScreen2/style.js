import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({

    rowContainer:{
        marginTop:15,
        marginLeft:15,
    },
    row:{
        flexDirection:"row",
        marginTop:10,

    },
    checked:{
        backgroundColor:commonStyle.PRIMARY_COLOR,
        borderRadius:17,
        marginHorizontal:5,
        height:40
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    status:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:10,
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
    title:{
        flex:3,
        paddingTop:20,
        paddingLeft:30,
        paddingBottom:10,
        justifyContent:'center',
    },
    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,
    },
    notChecked:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:commonStyle.TEXT_COLOR,
        borderRadius:17,
        marginHorizontal:5,
        height:40

    },

    label:{
        marginLeft:7,
        color:commonStyle.TEXT_COLOR

    },
    text:{
        fontSize:15,

    },
    notText:{
        color:commonStyle.TEXT_COLOR,
        fontSize:15,
    },
});

export default styles