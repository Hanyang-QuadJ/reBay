import { StyleSheet } from "react-native";
import commonStyle from "../index";

const style = StyleSheet.create({
  inputArea: {
    justifyContent: "center",
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    marginLeft: 10,
    borderColor: commonStyle.BORDER_COLOR,
    borderWidth: 1,
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 45
  },
  postButton: {
    marginLeft: 10,
    color: commonStyle.PRIMARY_COLOR
  }
});
export default style;
