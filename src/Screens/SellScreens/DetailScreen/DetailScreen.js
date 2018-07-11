import React, { Component } from "react";
import { TextInput, AsyncStorage, View } from "react-native";
import { connect } from "react-redux";
import { Container, Text, Content, Button } from "native-base";
import LoadingActivity from "../../../Components/LoadingActivity/LoadingActivity";
import StepHeader from "../../../Components/StepHeader/StepHeader";
import FooterButton from "../../../Components/FooterButtonComponent/FooterButtonComponent";
import InputComponent from "../../../Components/InputComponent/InputComponent";
import styles from "./style";
import * as ItemAction from "../../../Actions/ItemAction";
import * as commonStyle from "../../../Constants/commonStyle";

const mapStateToProps = state => {
  return {
    item_id: state.ItemReducer.item_id,
    token: state.LoginReducer.token
  };
};

class DetailScreen extends Component {
  static navigatorStyle = commonStyle.NavigationStyleReverse;
  static navigatorButtons = {
    rightButtons: [
      {
        title: "완료", // for a textual button, provide the button title (label)
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
      content: "",
      sub_content: "pending",
      tag: "",
      posting: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together

    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
      if (event.id == "next") {
        this.postItem();
      }
    }
  }

  parseTag = () => {
    let split = this.state.tag.split("#", 100);
    let myArray = split.filter(v => v !== "");
    let myArray2 = [];
    let Tag = [];
    for (let i = 0; i < myArray.length; i++) {
      myArray2[i] = myArray[i].trim();
    }
    let finalTag = myArray2.filter(v => v !== "");
    for (let i = 0; i < finalTag.length; i++) {
      Tag[i] = "#" + finalTag[i];
    }
    return Tag;
  };

  postItem = async () => {
    this.setState({ posting: true });
    let token = this.props.token;
    let pic_list = this.props.pic_list;
    let price = this.props.price;
    let item_name = this.props.item_name;
    let brand_id = this.props.brand_id;
    let size = this.props.size;
    let season = this.props.season;
    let category_1 = this.props.category_1;
    let category_2 = this.props.category_2;
    let item_status = this.props.item_status;
    let fullbox = this.props.fullbox;
    let warantee = this.props.warantee;
    let domestic = this.props.domestic;
    let refund = this.props.refund;
    let content = this.state.content;
    let sub_content = this.state.sub_content;
    let tags = await this.parseTag();
    // console.log(pic_list);
    // console.log(price);
    // console.log(item_name);
    // console.log(brand_id);
    // console.log(size);
    // console.log(season);
    // console.log(category_1);
    // console.log(category_2);
    // console.log(item_status);
    // console.log(fullbox);
    // console.log(warantee);
    // console.log(domestic);
    // console.log(refund);
    // console.log(content);
    // console.log(sub_content);
    const params = {
      props: this.props,
      body: {
        pic_list,
        price,
        item_name,
        brand_id,
        size,
        season,
        category_1,
        category_2,
        item_status,
        fullbox,
        warantee,
        domestic,
        refund,
        content,
        sub_content,
        tags
      }
    };
    await this.props.dispatch(ItemAction.postItem(params)).then(item_id => {
      this.props.dispatch(ItemAction.getItem(item_id)).then(item => {
        this.props
          .dispatch(ItemAction.getItemPicture(item_id))
          .then(picture => {
            this.setState({ posting: false });
            this.props.navigator.push({
              screen: "Item",
              title: item_name,
              passProps: {
                item: item,
                picture: picture,
                tags: item.tags[0]
              }
            });
          });
      });
    });
  };

  componentDidUpdate() {}

  render() {
    console.log(this.props.brand_id);
    if (this.state.posting === true) {
      return <LoadingActivity />;
    } else {
      return (
        <Container style={{ backgroundColor: "white" }}>
          <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
            <StepHeader
              text1="상품의"
              text2="추가사항"
              text3="태그를 입력해주세요"
              color={commonStyle.PRIMARY_COLOR}
              stepColor={commonStyle.TEXT_COLOR}
              paddingBottom={10}
              currentStep={6}
              finalStep={6}
            />
            <TextInput
              multiline={true}
              numberOfLines={3}
              placeholder="제품상세설명"
              onChangeText={content => this.setState({ content })}
              style={styles.textArea}
            />
            <InputComponent
              image={require("../../../Assets/dress.png")}
              placeholder="태그"
              onChangeText={tag => this.setState({ tag })}
              marginTop={20}
              style={{ borderColor: commonStyle.BORDER_COLOR }}
              textColor={commonStyle.TEXT_COLOR}
            />
          </Content>
        </Container>
      );
    }
  }
}

export default (DetailScreen = connect(mapStateToProps)(DetailScreen));
