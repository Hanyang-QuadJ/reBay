import registerScreens from "./App";
import { Navigation } from "react-native-navigation";
registerScreens();
// import PushNotification from "react-native-push-notification";

Navigation.startSingleScreenApp({
  screen: {
    screen: "Init",
    title: "reBay"
  }
});
