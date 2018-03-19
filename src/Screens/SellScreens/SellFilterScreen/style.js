import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    row:{
        flexDirection:"row",

    },
    checked:{
        backgroundColor:commonStyle.PRIMARY_COLOR
    },
    notChecked:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:commonStyle.PRIMARY_COLOR
    },
    notText:{
        color:commonStyle.PRIMARY_COLOR
    },
    status:{
        flex:1
    },
    inputArea:{
        flex:4
    },
    title:{
        paddingVertical:30,
        justifyContent:'center',
    },
    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        color:commonStyle.PRIMARY_COLOR,
        marginHorizontal:15,
    }

});

export default styles