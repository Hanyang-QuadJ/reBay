import { StyleSheet } from "react-native";
import commonStyle from "../index";
const styles = StyleSheet.create({
  option: {
    borderTopWidth: 1,
    borderColor: commonStyle.BORDER_COLOR
  },
  option_wrapper: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center"
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
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: commonStyle.PRIMARY_COLOR,
    borderRadius: 10
  }
});

export default styles;