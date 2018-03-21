import {StyleSheet} from 'react-native';
import commonStyle from '../index'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal:30,

    },
    icon: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    emptyText:{
        padding:8,

    },
    input: {
        borderBottomWidth: 1,
        flex: 10,
        justifyContent: 'center',

    }


});

export default styles