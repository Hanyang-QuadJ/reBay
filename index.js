import registerScreens from './App';
import { Navigation } from 'react-native-navigation';
registerScreens();



Navigation.startSingleScreenApp({
    screen: {
        screen: 'Init',
        title: 'reBay'
    },

});
