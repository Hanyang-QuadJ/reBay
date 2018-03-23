import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    rowContainer:{
        marginTop:15,
    },
    row:{
        flexDirection:"row",
        marginTop:10,
        paddingLeft:25,

    },
    checked:{
        backgroundColor:commonStyle.PRIMARY_COLOR,
        borderRadius:17,
        marginHorizontal:5,
        height:40
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
        marginLeft:30,
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