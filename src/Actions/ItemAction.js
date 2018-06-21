import * as Request from "../Utils/WebRequest";
import { ServerEndPoint, ServerEndPoint2 } from "../Constants/server";

export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

//아이템 하나 가져오기
export const FAILED_TO_GET_ITEM = "FAILED_TO_GET_ITEM";
export const SUCCEED_TO_GET_ITEM = "SUCCEED_TO_GET_ITEM";

//아이템 사진 가져오기
export const FAILED_TO_GET_ITEM_PICTURE = "FAILED_TO_GET_ITEM_PICTURE";
export const SUCCEED_TO_GET_ITEM_PICTURE = "SUCCEED_TO_GET_ITEM_PICTURE";

//아이템 등록하기
export const FAILED_TO_POST_ITEM = "FAILED_TO_POST_ITEM";
export const SUCCEED_TO_POST_ITEM = "SUCCEED_TO_POST_ITEM";

//아이템 걸러서 여러개 가져오기
export const FAILED_TO_POST_ITEMS = "FAILED_TO_POST_ITEMS";
export const SUCCEED_TO_POST_ITEMS = "SUCCEED_TO_POST_ITEMS";

//아이템 구매 완료
export const FAILED_TO_BUY_ITEM = "FAILED_TO_BUY_ITEM";
export const SUCCEED_TO_BUY_ITEM = "SUCCEED_TO_BUY_ITEM";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getItem = id => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/notoken/one/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      dispatch({
        type: SUCCEED_TO_GET_ITEM,
        payload: responseJson.item,
        brand_name: responseJson.brand_name,
        tags: responseJson.tags
      });
      return responseJson;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const getItemPicture = id => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/notoken/pic/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      console.log(responseJson);
      dispatch({
        type: SUCCEED_TO_GET_ITEM_PICTURE,
        payload: responseJson.result
      });
      return responseJson.result;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_ITEM_PICTURE,
        payload: { data: "NETWORK_ERROR" }
      });
      console.log(error);
    }
  };
};

export const postItem = params => {
  return async dispatch => {
    try {
      let response = await Request.postData("api/item/sell", params).then(
        result => {
          switch (result) {
            case "token_expired":
              return dispatch({ type: TOKEN_EXPIRED });
              break;

            default:
              console.log(result.item_id);
              dispatch({
                type: SUCCEED_TO_POST_ITEM,
                payload: result.item_id
              });
              return result.item_id;
              break;
          }
        }
      );
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_POST_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const postItems = (
  token,
  brand,
  category_1,
  category_2,
  item_status,
  season,
  max_price,
  min_price,
  index,
  condition
) => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/search", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token
        },
        body: JSON.stringify({
          brand_id: brand,
          category_1: category_1,
          category_2: category_2,
          item_status: item_status,
          season: season,
          max_price: max_price,
          min_price: min_price,
          index: index,
          condition: condition
        })
      });
      let responseJson = await response.json();
      dispatch({ type: SUCCEED_TO_POST_ITEMS, payload: responseJson });
      return responseJson;
    } catch (error) {
      dispatch({
        type: FAILED_TO_POST_ITEMS,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const payItem = params => {
  return async dispatch => {
    try {
      let response = Request.postData("api/pay", params.body).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_BUY_ITEM, payload: responseJson });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_BUY_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
