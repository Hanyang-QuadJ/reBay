import { StyleSheet } from "react-native";
import commonStyle from "../index";
const styles = StyleSheet.create({
  comment: {
    flexDirection: "column"
  },
  commentNested: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 5,
    alignItems: "center"
  },

  commentMain: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 5,
    alignItems: "center"
  },

  content: {
    flex: 3,
    marginLeft: 15,
    marginRight: 15
  },

  contentNested: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
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
  },
  commentReply: {
    paddingLeft: 65,
    paddingRight: 20,
    paddingBottom: 15
  },
  commentReply__text: {
    color: commonStyle.SUB_COLOR,
    fontSize: 14
  }
});

export default styles;
