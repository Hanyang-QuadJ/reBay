export const SUCCEED_TO_GET_LOG = "SUCCEED_TO_GET_LOG";
export const FAILED_TO_GET_LOG = "FAILED_TO_GET_LOG";
export const SUCCEED_TO_POST_LOG = "SUCCEED_TO_POST_LOG";
export const FAILED_TO_POST_LOG = "FAILED_TO_POST_LOG";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";
import * as Request from "../Utils/WebRequest";



import { ServerEndPoint2 } from "../Constants/server";

export const getLogs = params => {
  console.log(params);
  return async dispatch => {
    try {
      let response = Request.getData(
        `api/notify`,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });

          default:
            dispatch({ type: SUCCEED_TO_GET_LOG, payload: result });
            return result;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_LOG,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

