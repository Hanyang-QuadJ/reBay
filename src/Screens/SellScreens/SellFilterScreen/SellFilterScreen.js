import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import { Container, Text, Content, Item, Input } from "native-base";
import InputComponent from "../../../Components/InputComponent/InputComponent";
import FooterButtonComponent from "../../../Components/FooterButtonComponent/FooterButtonComponent";
import StepHeader from "../../../Components/StepHeader/StepHeader";

import styles from "./style";
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
  return {};
};

class SellFilterScreen extends Component {
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
      item_name: null,
      item_price: null,
      item_size: null
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together

    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
      if (event.id == "next") {
        this.goToCategory();
      }
    }
  }

  goToCategory = () => {
    let brand_id = this.props.brandID;
    let pic_list = this.props.pic_list;
    let item_name = this.state.item_name;
    let price = this.state.item_price;
    let size = this.state.item_size;

    // console.log(pic_list, item_name, brand_id, price, size, season, category_1, category_2, item_status, fullbox, warantee, domestic, refund)
    this.props.navigator.push({
      screen: "SellFilter2",
      title: "카테고리",
      passProps: {
        pic_list: pic_list,
        item_name: item_name,
        brand_id: brand_id,
        price: price,
        size: size
      }
    });
  };

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
            <StepHeader
              text1="상품명"
              text2="가격"
              text3="사이즈는 무엇인가요?"
              color={commonStyle.PRIMARY_COLOR}
              stepColor={commonStyle.TEXT_COLOR}
              paddingBottom={30}
              currentStep={3}
              finalStep={6}
            />
            <View style={styles.inputArea}>
              <InputComponent
                image={require("../../../Assets/dress.png")}
                placeholder="상품명"
                textColor={commonStyle.TEXT_COLOR}
                style={{ borderColor: commonStyle.BORDER_COLOR }}
                onChangeText={item_name => this.setState({ item_name })}
              />

              <InputComponent
                image={require("../../../Assets/dress.png")}
                placeholder="가격"
                textColor={commonStyle.TEXT_COLOR}
                marginTop={20}
                style={{ borderColor: commonStyle.BORDER_COLOR }}
                onChangeText={item_price => this.setState({ item_price })}
              />
              <InputComponent
                image={require("../../../Assets/dress.png")}
                placeholder="사이즈"
                textColor={commonStyle.TEXT_COLOR}
                marginTop={20}
                style={{ borderColor: commonStyle.BORDER_COLOR }}
                onChangeText={item_size => this.setState({ item_size })}
              />
            </View>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default (SellFilterScreen = connect(mapStateToProps)(SellFilterScreen));
