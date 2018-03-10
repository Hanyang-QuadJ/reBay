import { Navigation } from 'react-native-navigation';
import App from './App';
import InitScreen from './src/Screens/InitScreen/InitScreen';
import TutorialScreen from './src/Screens/AuthScreens/TutorialScreen/TutorialScreen'
import HomeScreen from './src/Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from './src/Screens/TabScreens/BuyScreen/BuyScreen';
import SignInScreen from './src/Screens/AuthScreens/SignInScreen/SignInScreen';
import store from './src/Store';
import {Provider} from 'react-redux';
import PictureScreen from './src/Screens/TabScreens/PictureScreen/PictureScreen';
import SellScreen from './src/Screens/TabScreens/SellScreen/SellScreen';
import BrandScreen from './src/Screens/TabScreens/BrandScreen/BrandScreen';

export default function registerScreens(){
    Navigation.registerComponent('Init', () => InitScreen,
        store,
        Provider);
    Navigation.registerComponent('Tutorial', () => TutorialScreen,
        store,
        Provider);
    Navigation.registerComponent('SignIn', () => SignInScreen,
        store,
        Provider);

//Tab
    Navigation.registerComponent('Home', () => HomeScreen,
        store,
        Provider);
    Navigation.registerComponent('Buy', () => BuyScreen,
        store,
        Provider);
    Navigation.registerComponent('Sell', () => SellScreen,
        store,
        Provider);


//SellScreens
    Navigation.registerComponent('Picture', () => PictureScreen,
        store,
        Provider);
    Navigation.registerComponent('Brand', () => BrandScreen,
        store,
        Provider);
}


