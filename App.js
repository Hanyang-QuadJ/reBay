import { Navigation } from "react-native-navigation";
import store from "./src/Store";
import { Provider } from "react-redux";

import InitScreen from "./src/Screens/InitScreen/InitScreen";
import TutorialScreen from "./src/Screens/AuthScreens/TutorialScreen/TutorialScreen";
import HomeScreen from "./src/Screens/TabScreens/HomeScreen/HomeScreen";
import BuyScreen from "./src/Screens/TabScreens/BuyScreen/BuyScreen";
import BuyScreen2 from "./src/Screens/TabScreens/BuyScreen/BuyScreen2";
import BuyScreen2_1 from "./src/Screens/TabScreens/BuyScreen/BuyScreen2_1";
import BuyScreen3 from "./src/Screens/TabScreens/BuyScreen/BuyScreen3";
import BuyScreen4 from "./src/Screens/TabScreens/BuyScreen/BuyScreen4";
import SignInScreen from "./src/Screens/AuthScreens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/Screens/AuthScreens/SignUpScreen/SignUpScreen";
import SignUpScreen2 from "./src/Screens/AuthScreens/SignUpScreen2/SignUpScreen2";
import SignUpScreen3 from "./src/Screens/AuthScreens/SignUpScreen3/SignUpScreen3";
import SignUpScreen4 from "./src/Screens/AuthScreens/SignUpScreen4/SignUpScreen4";

import PictureScreen from "./src/Screens/SellScreens/PictureScreen/PictureScreen";
import SellScreen from "./src/Screens/TabScreens/SellScreen/SellScreen";
import BrandScreen from "./src/Screens/BrandScreen/BrandScreen";
import SellFilterScreen from "./src/Screens/SellScreens/SellFilterScreen/SellFilterScreen";
import SellFilterScreen2 from "./src/Screens/SellScreens/SellFilterScreen2/SellFilterScreen2";
import SellFilterScreen3 from "./src/Screens/SellScreens/SellFilterScreen3/SellFilterScreen3";
import DetailScreen from "./src/Screens/SellScreens/DetailScreen/DetailScreen";
import ItemScreen from "./src/Screens/ItemScreen/ItemScreen";
import NoticeScreen from "./src/Screens/TabScreens/NoticeScreen/NoticeScreen";
import ProfileScreen from "./src/Screens/TabScreens/ProfileScreen/ProfileScreen";
import HomeItemScreen from "./src/Screens/HomeItemScreen/HomeItemScreen";
import BasketScreen from "./src/Screens/BasketScreen/BasketScreen";
import SearchScreen from "./src/Screens/SearchScreen/SearchScreen";

import OptionScreen1 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen1";
import OptionScreen2 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen2";
import OptionScreen3 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen3";
import OptionScreen4 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen4";
import OptionScreen5 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen5";
import OptionScreen6 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen6";
import OptionScreen7 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen7";
import OptionScreen8 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen8";
import OptionScreen9 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen9";
import OptionScreen10 from "./src/Screens/TabScreens/ProfileScreen/OptionScreen/OptionScreen10";
export default function registerScreens() {
  //AuthScreens
  Navigation.registerComponent("Init", () => InitScreen, store, Provider);
  Navigation.registerComponent(
    "Tutorial",
    () => TutorialScreen,
    store,
    Provider
  );
  Navigation.registerComponent("SignIn", () => SignInScreen, store, Provider);
  Navigation.registerComponent("SignUp", () => SignUpScreen, store, Provider);
  Navigation.registerComponent("SignUp2", () => SignUpScreen2, store, Provider);
  Navigation.registerComponent("SignUp3", () => SignUpScreen3, store, Provider);
  Navigation.registerComponent("SignUp4", () => SignUpScreen4, store, Provider);

  //Tab
  Navigation.registerComponent("Home", () => HomeScreen, store, Provider);
  Navigation.registerComponent("Buy", () => BuyScreen, store, Provider);
  Navigation.registerComponent("Sell", () => SellScreen, store, Provider);
  Navigation.registerComponent("Notice", () => NoticeScreen, store, Provider);
  Navigation.registerComponent("Profile", () => ProfileScreen, store, Provider);

  //SellScreens
  Navigation.registerComponent("Picture", () => PictureScreen, store, Provider);
  Navigation.registerComponent("Brand", () => BrandScreen, store, Provider);
  Navigation.registerComponent(
    "SellFilter",
    () => SellFilterScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    "SellFilter2",
    () => SellFilterScreen2,
    store,
    Provider
  );
  Navigation.registerComponent(
    "SellFilter3",
    () => SellFilterScreen3,
    store,
    Provider
  );
  Navigation.registerComponent("Detail", () => DetailScreen, store, Provider);
  Navigation.registerComponent("Item", () => ItemScreen, store, Provider);

  //BuyScreens
  Navigation.registerComponent("Buy2", () => BuyScreen2, store, Provider);
  Navigation.registerComponent("Buy2_1", () => BuyScreen2_1, store, Provider);
  Navigation.registerComponent("Buy3", () => BuyScreen3, store, Provider);
  Navigation.registerComponent("Buy4", () => BuyScreen4, store, Provider);

  //SearchScreens
  Navigation.registerComponent("Search", () => SearchScreen, store, Provider);

  //BasketScreens
  Navigation.registerComponent("Basket", () => BasketScreen, store, Provider);

  //ProfileOptionScreens
  Navigation.registerComponent("Opt1", () => OptionScreen1, store, Provider);
  Navigation.registerComponent("Opt2", () => OptionScreen2, store, Provider);
  Navigation.registerComponent("Opt3", () => OptionScreen3, store, Provider);
  Navigation.registerComponent("Opt4", () => OptionScreen4, store, Provider);
  Navigation.registerComponent("Opt5", () => OptionScreen5, store, Provider);
  Navigation.registerComponent("Opt6", () => OptionScreen6, store, Provider);
  Navigation.registerComponent("Opt7", () => OptionScreen7, store, Provider);
  Navigation.registerComponent("Opt8", () => OptionScreen8, store, Provider);
  Navigation.registerComponent("Opt9", () => OptionScreen9, store, Provider);
  Navigation.registerComponent("Opt10", () => OptionScreen10, store, Provider);
  Navigation.registerComponent(
    "HomeItem",
    () => HomeItemScreen,
    store,
    Provider
  );
}
