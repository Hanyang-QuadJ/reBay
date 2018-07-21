import { StyleSheet } from "react-native";
import commonStyle from "../../index";

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  thumbnail: {
    width: 46,
    height: 46,
    borderRadius: 23
  },
  userName: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 30,
    fontWeight: "600"
  },
  userGrade: {
    color: commonStyle.THIRD_COLOR,
    marginTop: 5,
    fontSize: 13
  },
  option: {
    borderTopWidth: 1,
    borderColor: commonStyle.BORDER_COLOR
  },
  option_wrapper: {
    paddingHorizontal: 10
  },
  option__icon: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    color: commonStyle.PRIMARY_COLOR,
    borderColor: commonStyle.PRIMARY_COLOR,
    borderRadius: 10
  },
  option__text: {
    marginLeft: 15,
    color: commonStyle.TEXT_COLOR
  }
});
export default style;
