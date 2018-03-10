import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    progress:{
        flex:0.6,
    },
    inform:{
        flex:0.7,
        alignItems:'center',
        justifyContent:'center'
    },
    informText:{
        fontSize:18,
        color:commonStyle.PRIMARY_COLOR
    },
    rowContainer:{
        flex:4,
        flexDirection:"column",
        justifyContent:"center"
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:2
    },
    image:{
        marginHorizontal:2,
        width:120,
        height:120,
    },
    button1:{
        height: 55,
        width:190,
        backgroundColor:"white",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button2:{
        height: 55,
        width:190,
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
        flex:0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }



});

export default styles