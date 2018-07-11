import { StyleSheet } from "react-native";
import commonStyle from "../index";
const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 15,
    paddingVertical: 5,
    alignItems: "center"
  },
  content: {
    flex: 3,
    marginLeft: 10
  },
  comment__text: {
    color: commonStyle.TEXT_COLOR
  },
  comment__loadingText: {
    color: commonStyle.BORDER_COLOR
  },
  comment__createdAt: {
    fontSize: 12,
    color: commonStyle.BORDER_COLOR
  }
});

export default styles;
