import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Slider, ScrollView } from "react-native";
import {
  Container,
  Text,
  Content,
  Item,
  Input,
  Form,
  Button,
  Badge,
  Header,
  Footer,
  Title,
  Left,
  Right,
  List,
  ListItem,
  FooterTab
} from "native-base";
import jsonData from "../../../Constants/data";
import styles from "./style2";
import * as commonStyle from "../../../Constants/commonStyle";
import FooterButtonComponent from "../../../Components/FooterButtonComponent/FooterButtonComponent";
import StepHeader from "../../../Components/StepHeader/StepHeader";

const mapStateToProps = state => {
  return {};
};

class BuyScreen2 extends Component {
  static navigatorStyle = commonStyle.TabBarHidden;
  constructor(props) {
    super(props);
    this.state = {
      selectedBrand: this.props.selectedBrand,
      selectedCategory: 0,
      selectedDetailCategory: 0,
      category: jsonData.category,
      selectedItemStatus: 0,
      item_status: jsonData.item_status,
      selectedSeason: 0,
      season: jsonData.season,
      year: jsonData.year,
      selectedYear: 0
    };
  }

  goToBuyScreen2_1 = () => {
    this.props.navigator.push({
      screen: "Buy2_1",
      title: "가격",
      passProps: {
        brand_id: this.props.brand_id,
        brand: this.state.selectedBrand,
        category: this.state.category[this.state.selectedCategory].name,
        detailCategory: this.state.category[this.state.selectedCategory]
          .detailCategory[this.state.selectedDetailCategory].name,
        status: this.state.item_status[this.state.selectedItemStatus].name,
        season: this.state.season[this.state.selectedSeason].name,
        year: this.state.year[this.state.selectedYear].name
      }
    });
  };

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
          <StepHeader
            text1="찾으시는"
            text2="카테고리는"
            text3="무엇인가요?"
            color={commonStyle.PRIMARY_COLOR}
            stepColor={commonStyle.TEXT_COLOR}
            paddingBottom={10}
            currentStep={2}
            finalStep={4}
          />
          <View style={styles.rowContainer}>
            <Text style={styles.label}>상위 카테고리</Text>
            <ScrollView
              style={styles.row}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.category.map((category, index) => (
                <Button
                  style={
                    index === this.state.selectedCategory
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedCategory: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedCategory
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {category.name}
                  </Text>
                </Button>
              ))}
            </ScrollView>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>하위 카테고리</Text>
            <ScrollView
              style={styles.row}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.category[this.state.selectedCategory] === null ? (
                <Text>Empty</Text>
              ) : (
                this.state.category[
                  this.state.selectedCategory
                ].detailCategory.map((category, index) => (
                  <Button
                    style={
                      index === this.state.selectedDetailCategory
                        ? styles.checked
                        : styles.notChecked
                    }
                    key={index}
                    onPress={() => {
                      this.setState({
                        selectedDetailCategory: index
                      });
                    }}
                  >
                    <Text
                      style={
                        index === this.state.selectedDetailCategory
                          ? styles.text
                          : styles.notText
                      }
                    >
                      {category.name}
                    </Text>
                  </Button>
                ))
              )}
            </ScrollView>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>상품상태</Text>

            <ScrollView style={styles.row} horizontal={true}>
              {this.state.item_status.map((item_status, index) => (
                <Button
                  style={
                    index === this.state.selectedItemStatus
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedItemStatus: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedItemStatus
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {item_status.name}
                  </Text>
                </Button>
              ))}
            </ScrollView>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>시즌</Text>
            <ScrollView
              style={styles.row}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.year.map((year, index) => (
                <Button
                  style={
                    index === this.state.selectedYear
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedYear: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedYear
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {year.name}
                  </Text>
                </Button>
              ))}
            </ScrollView>
            <ScrollView
              style={styles.row}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.season.map((season, index) => (
                <Button
                  style={
                    index === this.state.selectedSeason
                      ? styles.checked
                      : styles.notChecked
                  }
                  key={index}
                  onPress={() => {
                    this.setState({
                      selectedSeason: index
                    });
                  }}
                >
                  <Text
                    style={
                      index === this.state.selectedSeason
                        ? styles.text
                        : styles.notText
                    }
                  >
                    {season.name}
                  </Text>
                </Button>
              ))}
            </ScrollView>
          </View>
        </Content>

        <FooterButtonComponent
          leftText="임시저장"
          rightText="다음으로"
          onPress={this.goToBuyScreen2_1}
        />
      </Container>
    );
  }
}

export default (BuyScreen2 = connect(mapStateToProps)(BuyScreen2));
