import { StyleSheet } from "react-native";
import commonStyle from "../index";

const style = StyleSheet.create({
  inputArea: {
    width: "100%",
    flexDirection: "column"
  },

  inputMain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },

  inputReply: {
    height: 40,
    backgroundColor: commonStyle.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },

  inputReplyText: {
    color: "white"
  },

  inputContainer: {
    width: 250,
    borderColor: commonStyle.BORDER_COLOR,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 45
  },
  input: {
    color: commonStyle.TEXT_COLOR,
    width: 250,
    paddingHorizontal: 15
  },
  postButton: {
    marginLeft: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start"
  },
  postButtonText: {
    color: commonStyle.PRIMARY_COLOR
  }
});
export default style;
