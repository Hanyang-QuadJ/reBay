import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import * as commonStyle from "../Constants/commonStyle";
export default commonStyle;

const icons = Platform.select({
  ios: require("../Assets/dress.png"),
  android: require("../Assets/dress.png")
});

export const Tab = {
  route: [
    {
      name: "남성의류",
      icon: require("../Assets/Icons/category/category_1.png")
    },
    {
      name: "여성의류",
      icon: require("../Assets/Icons/category/category_2.png")
    },
    {
      name: "남성슈즈",
      icon: require("../Assets/Icons/category/category_3.png")
    },
    {
      name: "여성슈즈",
      icon: require("../Assets/Icons/category/category_4.png")
    },
    {
      name: "가방",
      icon: require("../Assets/Icons/category/category_5.png")
    },
    {
      name: "패션잡화",
      icon: require("../Assets/Icons/category/category_6.png")
    },
    {
      name: "지갑/벨트",
      icon: require("../Assets/Icons/category/category_7.png")
    },
    {
      name: "악세사리",
      icon: require("../Assets/Icons/category/category_8.png")
    },
    {
      name: "화장품/향수",
      icon: require("../Assets/Icons/category/category_9.png")
    },
    {
      name: "선글라스/안경",
      icon: require("../Assets/Icons/category/category_10.png")
    },
    {
      name: "시계",
      icon: require("../Assets/Icons/category/category_11.png")
    }
  ]
};

export function GoToHome() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "홈",
        screen: "Home", // this is a registered name for a screen
        icon: require("../Assets/Icons/tabs/tab_1.png"),
        // selectedIcon: require('../img/one_selected.png'), // iOS only
        title: "reBay"
        // titleImage: require("../Assets/Logos/rebay_logo.png")
      },
      {
        label: "구매하기",
        screen: "Buy",
        icon: require("../Assets/Icons/tabs/tab_2.png"),
        // selectedIcon: require('../img/two_selected.png'), // iOS only
        title: "구매하기"
      },
      {
        label: "판매하기",
        screen: "Sell",
        title: "판매하기",
        icon: require("../Assets/Icons/tabs/tab_3.png"),

        modal: true
      },
      {
        label: "내 소식",
        screen: "Notice",
        title: "알림",
        icon: require("../Assets/Icons/tabs/tab_4.png")
      },
      {
        label: "마이페이지",
        screen: "Profile",
        title: "마이페이지",
        icon: require("../Assets/Icons/tabs/tab_5.png")
      }
    ],
    tabsStyle: {
      tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR,
      tabBarHideShadow: false
    },
    appStyle: {
      tabBarSelectedButtonColor: commonStyle.PRIMARY_COLOR,
      tabBarHideShadow: false,
      forceTitlesDisplay: true
    }
  });
}
