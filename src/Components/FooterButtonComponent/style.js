import { StyleSheet, Dimensions } from 'react-native';
import  commonStyle from '../index'
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    button1:{
        height: 55,
        width:window.width/2,
        backgroundColor:"white",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button2:{
        height: 55,
        width:window.width/2,
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
        color:"white"
    },
    footer:{
        width:window.width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }


});

export default styles