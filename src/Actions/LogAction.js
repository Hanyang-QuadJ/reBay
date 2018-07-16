export const SUCCEED_TO_GET_LOG = "SUCCEED_TO_GET_LOG";
export const FAILED_TO_GET_LOG = "FAILED_TO_GET_LOG";

export const SUCCEED_TO_POST_LOG = "SUCCEED_TO_POST_LOG";
export const FAILED_TO_POST_LOG = "FAILED_TO_POST_LOG";

export const SUCCEED_TO_PATCH_LOG = "SUCCEED_TO_PATCH_LOG";
export const FAILED_TO_PATCH_LOG = "FAILED_TO_PATCH_LOG";

export const SUCCEED_TO_GET_NOTICE_COUNT = "SUCCEED_TO_GET_NOTICE_COUNT";
export const FAILED_TO_GET_NOTICE_COUNT = "FAILED_TO_GET_NOTICE_COUNT";

export const TOKEN_EXPIRED = "TOKEN_EXPIRED";
import * as Request from "../Utils/WebRequest";

import { ServerEndPoint2 } from "../Constants/server";

export const getLogs = params => {
  return async dispatch => {
    try {
      let response = Request.getData(`api/notify`, params).then(result => {
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

export const readLog = params => {
  return async dispatch => {
    console.log(params.props.item.id)
    try {
      let response = Request.patchData(`api/notify/${params.props.item.id}`, params).then(
        result => {
          switch (result) {
            case "token_expired":
              dispatch({ type: TOKEN_EXPIRED });
              break;

            default:
              dispatch({ type: SUCCEED_TO_PATCH_LOG, payload: result });
              return result;
              break;
          }
        }
      );
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_PATCH_LOG,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
}

export const getNoticeCounts = params => {
  return async dispatch => {
    try {
      let response = Request.getData(`api/notify/count`, params).then(
        result => {
          switch (result) {
            case "token_expired":
              return dispatch({ type: TOKEN_EXPIRED });

            default:
              dispatch({
                type: SUCCEED_TO_GET_NOTICE_COUNT,
                payload: result.count
              });
              return result.count;
          }
        }
      );
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_NOTICE_COUNT,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
