import { ServerEndPoint, ServerEndPoint2 } from "../Constants/server";

export const START_TO_GET_RECOMMEND = "START_TO_GET_RECOMMEND";
export const SUCCEED_TO_GET_RECOMMEND = "SUCCEED_TO_GET_RECOMMEND";
export const FAILED_TO_GET_RECOMMEND = "FAILED_TO_GET_RECOMMEND";

export const getRecommend = () => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/brand/recent", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();

      await dispatch({
        type: SUCCEED_TO_GET_RECOMMEND,
        payload: responseJson.result
      });
      return responseJson.result;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_RECOMMEND,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const refreshRecommend = () => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint2 + "api/brand/recent", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      // console.log(responseJson);
      await dispatch({
        type: SUCCEED_TO_GET_RECOMMEND,
        payload: responseJson.result
      });
      return responseJson.result;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_RECOMMEND,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
