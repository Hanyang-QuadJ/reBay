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
                icon: require('../Assets/dress.png'),
                // selectedIcon: require('../img/one_selected.png'), // iOS only
                title: 'reBay'
            },
            {
                label: '구매하기',
                screen: 'Buy',
                icon: require('../Assets/dress.png'),
                // selectedIcon: require('../img/two_selected.png'), // iOS only
                title: '구매하기'
            },
            {
                label:'판매하기',
                screen:'Sell',
                title:'판매하기',
                icon: require('../Assets/dress.png'),

                modal:true
            },
            {
                label:'내 소식',
                screen:'Notice',
                title:'알림',
                icon: require('../Assets/dress.png'),

            }
        ],
        tabsStyle:{
            tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR,
        },
        appStyle:{
            tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR,
            forceTitlesDisplay: true,
        }
    });
}


