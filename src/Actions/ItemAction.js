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

//아이템 아이디로 문의 가져오기
export const FAILED_TO_GET_HELP_BY_ITEM_ID = "FAILED_TO_GET_HELP_BY_ITEM_ID";
export const SUCCEED_TO_GET_HELP_BY_ITEM_ID = "SUCCEED_TO_GET_HELP_BY_ITEM_ID";

//아이템 문의
export const FAILED_TO_ASK_ITEM = "FAILED_TO_ASK_ITEM";
export const SUCCEED_TO_ASK_ITEM = "SUCCEED_TO_ASK_ITEM";

//아이템 좋아요
export const FAILED_TO_LIKE_ITEM = "FAILED_TO_LIKE_ITEM";
export const SUCCEED_TO_LIKE_ITEM = "SUCCEED_TO_LIKE_ITEM";

//아이템 답변하기
export const FAILED_TO_ANSWER_ITEM = "FAILED_TO_ANSWER_ITEM";
export const SUCCEED_TO_ANSWER_ITEM = "SUCCEED_TO_ANSWER_ITEM";

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
          "Content-Type": "application/json"
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

export const askItem = params => {
  return async dispatch => {
    try {
      let response = Request.postData("api/help", params).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_ASK_ITEM, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_ASK_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const likeItem = params => {
  return async dispatch => {
    try {
      let response = Request.postData(
        "api/item/like/" + params.props.item_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_LIKE_ITEM, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_LIKE_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const getMyHelpByItemId = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        "api/help/item/me/" + params.props.item_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_GET_HELP_BY_ITEM_ID, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_HELP_BY_ITEM_ID,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const getHelpByItemId = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        "api/help/item/" + params.props.item_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_GET_HELP_BY_ITEM_ID, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_HELP_BY_ITEM_ID,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const postAnswer = params => {
  return async dispatch => {
    try {
      let response = Request.patchData("api/help/answer", params).then(
        result => {
          switch (result) {
            case "token_expired":
              dispatch({ type: TOKEN_EXPIRED });
              break;

            default:
              dispatch({ type: SUCCEED_TO_ANSWER_ITEM, payload: result });
              return result;
              break;
          }
        }
      );
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_ANSWER_ITEM,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
