export const SUCCEED_TO_GET_BASKET = "SUCCEED_TO_GET_BASKET";
export const FAILED_TO_GET_BASKET = "FAILED_TO_GET_BASKET";
export const SUCCEED_TO_POST_BASKET = "SUCCEED_TO_POST_BASKET";
export const FAILED_TO_POST_BASKET = "FAILED_TO_POST_BASKET";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

import { ServerEndPoint2 } from "../Constants/server";

export const getBaskets = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/item/temp", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": params.token
        }
      });
      let responseJson = await response.json();
      if (response.status === 496) {
        await dispatch({
          type: TOKEN_EXPIRED,
          payload: responseJson.result
        });
        parmas.props.navigator.reset({
          screen: "Tutorial"
        });
      } else {
        await dispatch({
          type: SUCCEED_TO_GET_BASKET,
          payload: responseJson.result
        });
        return responseJson.result;
      }
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_BASKET,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const postBasket = params => {
  return async dispatch => {
    try {
      let response = await fetch(
        ServerEndPoint2 + "api/item/temp/" + params.item_id,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": params.token
          }
        }
      );
      let responseJson = await response.json();
      if (response.status === 496) {
        dispatch({
          type: TOKEN_EXPIRED,
          payload: { data: "NETWORK_ERROR" }
        });
        params.props.navigator.reset({
          screen: "Tutorial"
        });
      } else {
        await dispatch({ type: SUCCEED_TO_POST_BASKET, payload: responseJson });
        return responseJson;
      }
    } catch (error) {
      dispatch({
        type: FAILED_TO_POST_BASKET,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
