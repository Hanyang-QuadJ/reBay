import { Navigation } from 'react-native-navigation';
import * as commonStyle from '../Constants/commonStyle'
export default commonStyle;

export function GoToHome() {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '홈',
                screen: 'Home', // this is a registered name for a screen
                // icon: require('../img/one.png'),
                // selectedIcon: require('../img/one_selected.png'), // iOS only
                title: 'reBay'
            },
            {
                label: '구매하기',
                screen: 'Buy',
                // icon: require('../img/two.png'),
                // selectedIcon: require('../img/two_selected.png'), // iOS only
                title: '구매하기'
            },
            {
                label:'판매하기',
                screen:'Sell',
                title:'판매하기',
                modal:true
            }
        ]
    });
}


