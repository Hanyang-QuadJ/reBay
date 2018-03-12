import { Navigation } from 'react-native-navigation';
import App from './App';
import InitScreen from './src/Screens/InitScreen/InitScreen';
import TutorialScreen from './src/Screens/AuthScreens/TutorialScreen/TutorialScreen'
import HomeScreen from './src/Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from './src/Screens/TabScreens/BuyScreen/BuyScreen';
import SignInScreen from './src/Screens/AuthScreens/SignInScreen/SignInScreen';
import store from './src/Store';
import {Provider} from 'react-redux';
import PictureScreen from './src/Screens/SellScreens/PictureScreen/PictureScreen';
import SellScreen from './src/Screens/TabScreens/SellScreen/SellScreen';
import BrandScreen from './src/Screens/BrandScreen/BrandScreen';
import SellFilterScreen from './src/Screens/SellScreens/SellFilterScreen/SellFilterScreen';
import SellFilterScreen2 from './src/Screens/SellScreens/SellFilterScreen2/SellFilterScreen2';
import SellFilterScreen3 from './src/Screens/SellScreens/SellFilterScreen3/SellFilterScreen3';
import DetailScreen from './src/Screens/SellScreens/DetailScreen/DetailScreen';
import ItemScreen from './src/Screens/ItemScreen/ItemScreen';



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
    Navigation.registerComponent('SellFilter', () => SellFilterScreen,
        store,
        Provider);
    Navigation.registerComponent('SellFilter2', () => SellFilterScreen2,
        store,
        Provider);
    Navigation.registerComponent('SellFilter3', () => SellFilterScreen3,
        store,
        Provider);
    Navigation.registerComponent('Detail', () => DetailScreen,
        store,
        Provider);
    Navigation.registerComponent('Item', () => ItemScreen,
        store,
        Provider);
}


