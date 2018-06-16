import { AsyncStorage } from "react-native";
import * as Request from "../Utils/WebRequest";

//Define Type

export const FAILED_TO_GET_BRAND = "FAILED_TO_GET_BRAND";
export const SUCCEED_TO_GET_BRAND = "SUCCEED_TO_GET_BRAND";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

export const getBrand = params => {
  return async dispatch => {
    try {
      let response = await Request.getData("api/brand", params).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({
              type: TOKEN_EXPIRED,
              payload: { data: "NETWORK_ERROR" }
            });
          default:
            dispatch({ type: SUCCEED_TO_GET_BRAND, payload: result });
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_BRAND,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
