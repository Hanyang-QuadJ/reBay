import { StyleSheet } from "react-native";
import commonStyle from "../index";

const style = StyleSheet.create({
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1
  },
  userInfo__thumbName: {
    flexDirection: "row",
    alignItems: "center"
  },
  userInfo__nameRate: {
    marginLeft: 15
  },
  userInfo__name: {
    fontSize: 17,
    color: commonStyle.TEXT_COLOR,
    fontWeight: "700"
  },
  userInfo__followArea: {
    flexDirection: "row"
  },
  userInfo__following: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    borderRightWidth: 0.5,
    borderColor: commonStyle.BORDER_COLOR,
    paddingRight: 12
  },
  userInfo__followingText: {
    color: commonStyle.LIGHT_TEXT,
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 3
  },
  userInfo__followingNumber: {
    color: commonStyle.LIGHT_TEXT,
    fontSize: 13,
    fontWeight: "100"
  },
  userInfo__follower: {
    paddingLeft: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default style;
