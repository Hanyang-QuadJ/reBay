import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    container:{
        flex:1
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
        width:100,
        height:100,
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



});

export default styles