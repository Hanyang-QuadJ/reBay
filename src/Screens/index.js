import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native'
import * as commonStyle from '../Constants/commonStyle'
export default commonStyle;

const icons = Platform.select({
    ios: require('../Assets/dress.png'),
    android: require('../Assets/dress.png')

});

export function GoToHome() {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '홈',
                screen: 'Home', // this is a registered name for a screen
                icon: icons,
                // selectedIcon: require('../img/one_selected.png'), // iOS only
                title: 'reBay'
            },
            {
                label: '구매하기',
                screen: 'Buy',
                icon: icons,
                // selectedIcon: require('../img/two_selected.png'), // iOS only
                title: '구매하기'
            },
            {
                label:'판매하기',
                screen:'Picture',
                title:'판매하기',
                icon: require('../Assets/dress.png'),

                modal:true
            }
        ]
    });
}


