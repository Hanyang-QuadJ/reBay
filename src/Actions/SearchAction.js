import * as Request from "../Utils/WebRequest";

export const FAILED_TO_SEARCH = "FAILED_TO_SEARCH";
export const SUCCEED_TO_SEARCH = "SUCCEED_TO_SEARCH";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

export const searchItemByName = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        `api/search/name?index=${params.index}&name=${params.query}`,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_SEARCH, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_SEARCH,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const searchItemByBrand = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        `api/search/brand?index=${params.index}&name=${params.query}`,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_SEARCH, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_SEARCH,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const searchItemByTag = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        `api/search/tag?index=${params.index}&name=${params.query}`,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_SEARCH, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_SEARCH,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};

export const searchItemByCategory = params => {
  return async dispatch => {
    try {
      let response = Request.getData(
        `api/search/category?index=${params.index}&category=${params.query}`,
        params
      ).then(result => {
        switch (result) {
          case "token_expired":
            return dispatch({ type: TOKEN_EXPIRED });
            break;

          default:
            dispatch({ type: SUCCEED_TO_SEARCH, payload: result });
            return result;
            break;
        }
      });
      return response;
    } catch (error) {
      dispatch({
        type: FAILED_TO_SEARCH,
        payload: { data: "NETWORK_ERROR" }
      });
      console.error(error);
    }
  };
};
