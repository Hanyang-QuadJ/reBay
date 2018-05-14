import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import * as commonStyle from "../Constants/commonStyle";
export default commonStyle;
// import PushNotification from "react-native-push-notification";

// PushNotification.configure({
//   // (required) Called when a remote or local notification is opened or received
//   onNotification: function(notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    */
//   requestPermissions: true
// });

const icons = Platform.select({
  ios: require("../Assets/dress.png"),
  android: require("../Assets/dress.png")
});

export const Tab = {
  route: [
    {
      name: "남성의류",
      icon: require("../Assets/dress.png")
    },
    {
      name: "여성의류",
      icon: require("../Assets/dress.png")
    },
    {
      name: "남성슈즈",
      icon: require("../Assets/dress.png")
    },
    {
      name: "여성슈즈",
      icon: require("../Assets/dress.png")
    },
    {
      name: "가방",
      icon: require("../Assets/dress.png")
    },
    {
      name: "패션잡화",
      icon: require("../Assets/dress.png")
    },
    {
      name: "지갑/벨트",
      icon: require("../Assets/dress.png")
    },
    {
      name: "악세사리",
      icon: require("../Assets/dress.png")
    },
    {
      name: "화장품/향수",
      icon: require("../Assets/dress.png")
    },
    {
      name: "선글라스/안경",
      icon: require("../Assets/dress.png")
    },
    {
      name: "시계",
      icon: require("../Assets/dress.png")
    }
  ]
};

export function GoToHome() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "홈",
        screen: "Home", // this is a registered name for a screen
        icon: require("../Assets/sample.png"),
        // selectedIcon: require('../img/one_selected.png'), // iOS only
        title: "reBay"
      },
      {
        label: "구매하기",
        screen: "Buy",
        icon: require("../Assets/dress.png"),
        // selectedIcon: require('../img/two_selected.png'), // iOS only
        title: "구매하기"
      },
      {
        label: "판매하기",
        screen: "Sell",
        title: "판매하기",
        icon: require("../Assets/dress.png"),

        modal: true
      },
      {
        label: "내 소식",
        screen: "Notice",
        title: "알림",
        icon: require("../Assets/dress.png")
      },
      {
        label: "마이페이지",
        screen: "Profile",
        title: "마이페이지",
        icon: require("../Assets/dress.png")
      }
    ],
    tabsStyle: {
      tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR
    },
    appStyle: {
      tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR,
      forceTitlesDisplay: true
    }
  });
}
