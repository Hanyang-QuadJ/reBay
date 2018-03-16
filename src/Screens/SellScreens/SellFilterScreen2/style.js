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
    notChecked:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:commonStyle.PRIMARY_COLOR,
        borderRadius:17,
        marginHorizontal:5,
        height:40

    },

    label:{
        marginLeft:7,
        color:commonStyle.PRIMARY_COLOR

    },
    text:{
        fontSize:15,

    },
    notText:{
        color:commonStyle.PRIMARY_COLOR,
        fontSize:15,
    },
});

export default styles