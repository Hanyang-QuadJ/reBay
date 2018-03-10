import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:"white",
    },
    logoContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    formContainer:{
        flex:1,
    },
    formInput:{
        marginLeft:40,
        marginRight:40,
    },
    buttonContainer:{
        flex:2,
        alignItems:'center'
    },
    rightText:{
        fontSize:14
    },
    //Input
    container: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    icon: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#898989',
        flex: 10,
        justifyContent: 'center',
        marginLeft: 10
    }
});

export default styles