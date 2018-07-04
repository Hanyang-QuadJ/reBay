import { StyleSheet, Dimensions } from "react-native";
import commonStyle from "../index";
const window = Dimensions.get("window");
const style = StyleSheet.create({
  userInfo: {
    paddingVertical: 10,
    justifyContent: "center"
  },
  userInfoContainer: {
    marginLeft: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  thumbnailArea: {},
  thumbnail: {
    width: 46,
    height: 46,
    borderRadius: 23
  },
  pictureArea: {},
  wrapper: {
    height: 375
  },
  itemInfo: {
    paddingVertical: 20,
    justifyContent: "center"
  },

  itemInfoContainer: {
    marginLeft: 20
  },
  userInfoArea: {
    marginLeft: 13
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: "600",
    color: commonStyle.TEXT_COLOR
  },

  slide1: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    height: 375,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: window.width,
    height: 375
  },
  brand_name: {
    fontSize: 18,
    fontWeight: "800",
    color: commonStyle.TEXT_COLOR
  },
  item_name: {
    marginTop: 3,
    fontSize: 16,
    color: commonStyle.TEXT_COLOR
  },
  heart: {
    position: "absolute",
    right: 10,
    top: 20
  },
  item_price: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: "600",
    color: commonStyle.TEXT_COLOR
  },
  itemDetail: {
    paddingVertical: 10,
    backgroundColor: "ghostwhite"
  },
  itemDetailContainer: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 30
  },
  row: {
    marginTop: 10,
    flexDirection: "row"
  },
  label: {
    flex: 2
  },
  labelText: {
    fontWeight: "700",
    color: commonStyle.TEXT_COLOR,
    fontSize: 16
  },
  content: {
    flex: 5,
    flexDirection: "row"
  },
  contentText: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 16
  },
  tag: {
    color: commonStyle.SUB_COLOR,
    fontSize: 16,
    marginRight: 5
  }
});
export default style;
