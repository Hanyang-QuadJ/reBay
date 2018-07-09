import { ServerEndPoint2 } from "../Constants/server";
import * as Request from "../Utils/WebRequest";

//내 정보 가져오기
export const FAILED_TO_GET_ME = "FAILED_TO_GET_ME";
export const SUCCEED_TO_GET_ME = "SUCCEED_TO_GET_ME";

//판매 대기중 아이템 가져오기
export const FAILED_TO_GET_UNSELLED_LIST = "FAILED_TO_GET_UNSELLED_LIST";
export const SUCCEED_TO_GET_UNSELLED_LIST = "SUCCEED_TO_GET_UNSELLED_LIST";

//판매된 아이템 가져오기
export const FAILED_TO_GET_SELLLIST = "FAILED_TO_GET_SELLLIST";
export const SUCCEED_TO_GET_SELLLIST = "SUCCEED_TO_GET_SELLLIST";

//문의 받은 내역 가져오기
export const FAILED_TO_GET_ANSWER = "FAILED_TO_GET_ANSWER";
export const SUCCEED_TO_GET_ANSWER = "SUCCEED_TO_GET_ANSWER";

//문의 한 내역 가져오기
export const FAILED_TO_GET_QUESTION = "FAILED_TO_GET_QUESTION";
export const SUCCEED_TO_GET_QUESTION = "SUCCEED_TO_GET_QUESTION";

//토큰 만료
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

export const getMe = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/user/me", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": params.token
        }
      });
      let responseJson = await response.json();
      await dispatch({
        type: SUCCEED_TO_GET_ME,
        payload: responseJson.result[0]
      });
      return responseJson.result[0];
    } catch (error) {
      dispatch({ type: FAILED_TO_GET_ME, payload: { data: "NETWORK_ERROR" } });
      console.error(error);
    }
  };
};

export const getUnSelledList = params => {
  return async dispatch => {
    try {
      let response = Request.getData("api/item/all", params).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_GET_UNSELLED_LIST, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      return dispatch({
        type: FAILED_TO_GET_UNSELLED_LIST,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const getSellList = params => {
  return async dispatch => {
    try {
      let response = Request.getData("api/user/selllist", params).then(
        result => {
          switch (result) {
            case "token_expired":
              return dispatch({ type: TOKEN_EXPIRED });
              break;

            default:
              dispatch({ type: SUCCEED_TO_GET_SELLLIST, payload: result });
              return result;
              break;
          }
        }
      );
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_SELLLIST,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const getAnswer = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        "api/help/sell/" + params.seller_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_GET_QUESTION, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_QUESTION,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
