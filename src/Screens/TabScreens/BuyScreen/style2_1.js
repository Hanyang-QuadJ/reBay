import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    start:{
        flex:1,

        justifyContent:"center",
        alignItems:"center"

    },
    startText:{
        fontSize:24,
        fontWeight:'800',
        color:commonStyle.SUB_COLOR

    },
    end:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    endText:{
        fontSize:24,
        fontWeight:'800',
        color:commonStyle.SUB_COLOR
    },
    text:{
        fontSize:13,
        color:commonStyle.TEXT_COLOR,
        fontWeight:"600"
    }



});

export default styles