import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window");

import commonStyle from "../index";
const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  itemLeft: {
    width: window.width / 2.5,
    flexDirection: "column",
    marginLeft: 30,
    marginTop: 25
  },
  itemRight: {
    width: window.width / 2.5,
    flexDirection: "column",
    marginRight: 30,
    marginTop: 25
  },
  itemImage: {
    width: "100%",
    height: 140
  },
  itemOverlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: commonStyle.PRIMARY_COLOR,
    width: 45,
    height: 25
  },
  itemOverlayText: {
    position: "absolute",
    flex: 1,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 25
  },
  item_brand: {
    marginTop: 7,
    color: commonStyle.TEXT_COLOR,
    fontSize: 19,
    fontWeight: "600"
  },
  item_name: {
    marginTop: 3,
    fontSize: 15,
    color: commonStyle.TEXT_COLOR,
    fontWeight: "500"
  },
  item_status_new: {
    fontSize: 15,
    color: "white",
    fontWeight: "800"
  },
  item_status_old: {
    marginTop: 7,
    fontWeight: "600",
    fontSize: 13,
    color: commonStyle.TEXT_COLOR
  },
  item_price: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 17,
    marginTop: 2
  }
});

export default styles;
