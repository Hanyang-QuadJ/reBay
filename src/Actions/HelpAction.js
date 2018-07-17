import * as Request from "../Utils/WebRequest";

//아이템 아이디로 문의 가져오기
export const FAILED_TO_GET_HELP_BY_ITEM_ID = "FAILED_TO_GET_HELP_BY_ITEM_ID";
export const SUCCEED_TO_GET_HELP_BY_ITEM_ID = "SUCCEED_TO_GET_HELP_BY_ITEM_ID";

// 문의 아이디로 문의 가져오기
export const FAILED_TO_GET_HELP_BY_HELP_ID = "FAILED_TO_GET_HELP_BY_HELP_ID";
export const SUCCEED_TO_GET_HELP_BY_HELP_ID = "SUCCEED_TO_GET_HELP_BY_HELP_ID";

//아이템 문의
export const FAILED_TO_ASK_ITEM = "FAILED_TO_ASK_ITEM";
export const SUCCEED_TO_ASK_ITEM = "SUCCEED_TO_ASK_ITEM";

//아이템 답변하기
export const FAILED_TO_ANSWER_ITEM = "FAILED_TO_ANSWER_ITEM";
export const SUCCEED_TO_ANSWER_ITEM = "SUCCEED_TO_ANSWER_ITEM";

//문의 삭제
export const FAILED_TO_DELETE_HELP = "FAILED_TO_DELETE_HELP";
export const SUCCEED_TO_DELETE_HELP = "SUCCEED_TO_DELETE_HELP";

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

export const getHelpByHelpId = params => {
  console.log(params.props);
  return async dispatch => {
    try {
      let response = Request.getData(
        "api/help/" + params.props.item.help_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_GET_HELP_BY_HELP_ID, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_HELP_BY_HELP_ID,
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

export const deleteHelp = params => {
  return async dispatch => {
    try {
      let response = Request.deleteData(
        "api/help/" + params.help_id,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_DELETE_HELP, payload: result });
            return result;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_DELETE_HELP,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
