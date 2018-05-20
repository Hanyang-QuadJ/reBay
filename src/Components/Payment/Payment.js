import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import styles from "./style";
import { connect } from "react-redux";
import IAmPort from "react-native-iamport";

const mapStateToProps = state => {
  return {
    me: state.LoginReducer.me
  };
};
class Payment extends Component {
  constructor(props) {
    super(props);
  }

  _onPaymentResultReceive(response) {
    console.log(response);
    if (response.result == "success") {
      //성공시의 로직
      console.log("success");
    } else {
      //실패시의 로직
    }
  }

  render() {
    return (
      <IAmPort
        onPaymentResultReceive={this._onPaymentResultReceive}
        params={{
          code: "iamport",
          pg: "nice",
          pay_method: "card",
          app_scheme: "rebay",
          name: "주문명:결제테스트",
          amount: 100,
          buyer_email: "kashiashin@gmail.com",
          buyer_name: "신현종",
          buyer_tel: "010-7712-9638",
          buyer_addr: "서울특별시 강남구 삼성동",
          buyer_postcode: "123-456"
        }}
      />
    );
  }
}

export default (Payment = connect(mapStateToProps)(Payment));
