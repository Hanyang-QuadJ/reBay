import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { Container, Text, Content, Button } from "native-base";
import jsonData from "../../../Constants/data";
import FooterButton from "../../../Components/FooterButtonComponent/FooterButtonComponent";
import StepHeader from "../../../Components/StepHeader/StepHeader";
import styles from "./style";
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
  return {};
};

class SellFilterScreen3 extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;
  static navigatorButtons = {
    rightButtons: [
      {
        title: "다음", // for a textual button, provide the button title (label)
        id: "next" // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        // testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        // disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        // disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        // showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        // buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        // buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFullBox: 0,
      fullBox: jsonData.fullBox,
      selectedWarantee: 0,
      warantee: jsonData.warantee,
      selectedDomestic: 0,
      domestic: jsonData.domestic,
      selectedRefund: 0,
      refund: jsonData.refund
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together

    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
      if (event.id == "next") {
        this.goToDetail();
      }
    }
  }

  goToDetail = () => {
    let pic_list = this.props.pic_list;
    let item_name = this.props.item_name;
    let brand_id = this.props.brand_id;
    let price = this.props.price;
    let size = this.props.size;
    let season = this.props.season;
    let category_1 = this.props.category_1;
    let category_2 = this.props.category_2;
    let item_status = this.props.item_status;
    let fullbox = this.state.fullBox[this.state.selectedFullBox].index;
    let warantee = this.state.warantee[this.state.selectedWarantee].index;
    let domestic = this.state.domestic[this.state.selectedDomestic].index;
    let refund = this.state.refund[this.state.selectedRefund].index;

    this.props.navigator.push({
      screen: "Detail",
      title: "상세정보",
      passProps: {
        pic_list: pic_list,
        item_name: item_name,
        brand_id: brand_id,
        price: price,
        size: size,
        season: season,
        category_1: category_1,
        category_2: category_2,
        item_status: item_status,
        fullbox: fullbox,
        warantee: warantee,
        domestic: domestic,
        refund: refund
      }
    });
  };

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
          <StepHeader
            text1="상품의"
            text2="상세정보는"
            text3="어떻게 되나요?"
            color={commonStyle.PRIMARY_COLOR}
            paddingBottom={30}
            currentStep={5}
            stepColor={commonStyle.TEXT_COLOR}
            finalStep={6}
          />
          <View style={styles.rowContainer}>
            <Text style={styles.label}>구성상품</Text>
            <View style={styles.row}>
              {this.state.fullBox.map((fullBox, index) => (
                <Button
                  style={
                    index === this.state.selectedFullBox
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedFullBox: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedFullBox
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {fullBox.name}
                  </Text>
                </Button>
              ))}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>보증서</Text>
            <View style={styles.row}>
              {this.state.warantee.map((warantee, index) => (
                <Button
                  style={
                    index === this.state.selectedWarantee
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedWarantee: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedWarantee
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {warantee.name}
                  </Text>
                </Button>
              ))}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>구매</Text>
            <View style={styles.row}>
              {this.state.domestic.map((domestic, index) => (
                <Button
                  style={
                    index === this.state.selectedDomestic
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedDomestic: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedDomestic
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {domestic.name}
                  </Text>
                </Button>
              ))}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>환불</Text>
            <View style={styles.row}>
              {this.state.refund.map((refund, index) => (
                <Button
                  style={
                    index === this.state.selectedRefund
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedRefund: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedRefund
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {refund.name}
                  </Text>
                </Button>
              ))}
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default (SellFilterScreen3 = connect(mapStateToProps)(
  SellFilterScreen3
));
