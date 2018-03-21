import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        flex:2,
        paddingTop:30,
        justifyContent:'center',
    },

    title__text:{
        fontSize:26,
        marginTop:10,
        fontWeight:'800',
        marginHorizontal:30,
    },

    status:{
        flex:1,
        justifyContent:"flex-end",
        paddingRight:30,
        alignItems:"flex-end"

    },
    statusText:{
        fontSize:13,
        fontWeight:'700',

    },
    statusStrong:{
        fontSize:30,
        fontWeight:'800',

    },


});

export default styles