import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from '../../index';
const window = Dimensions.get('window');
const style = StyleSheet.create({
    container:{

    },

    activeTabStyle: {

    },
    activeTabTextStyle: {
        color:commonStyle.PRIMARY_COLOR,
        fontSize:13
    },
    tabTextStyle: {
        fontSize:13
    },
    tabUnderLine:{
        height:2,
        backgroundColor:commonStyle.PRIMARY_COLOR
    },
    tabBar:{
        height:45,
        paddingTop:5,
        flexDirection:'row',
        backgroundColor:'white',
        paddingBottom:5,

    },
    tabBarContainer:{
        flex:1,
        flexWrap:'nowrap'
    },
    tab:{
        width:58,
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    tabBarImage:{
        width:23,
        height:23
    },
    tabBarImageO:{
        width:23,
        height:23,
        tintColor:commonStyle.THIRD_COLOR
    },
    tabBarText:{
        fontSize:10,
        marginTop:2
    },
    tabBarTextO:{
        fontSize:10,
        marginTop:2,
        color:commonStyle.THIRD_COLOR
    },

    tabContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemLabel:{
        fontSize:18,
        fontWeight:"800",
        marginTop:20,
        marginLeft:30
    }

});
export default style
