import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    button1:{
        height: 55,
        flex:1,
        backgroundColor:"white",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button2:{
        height: 55,
        flex:1,
        backgroundColor:"white",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button3:{
        height: 55,
        flex:2,
        backgroundColor:commonStyle.PRIMARY_COLOR,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button1Text:{
        color:commonStyle.PRIMARY_COLOR
    },
    button2Text:{
        color:commonStyle.PRIMARY_COLOR
    },
    button3Text:{
        color:commonStyle.SECONDARY_COLOR
    },
    footer:{
        width:window.width,
        flexDirection:"row",
    }


});

export default styles