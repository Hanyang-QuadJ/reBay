import { ServerEndPoint, ServerEndPoint2 } from "../Constants/server";
import { AsyncStorage } from "react-native";

export const START_TO_LOGIN = "START_TO_LOGIN";
export const FAILED_TO_LOGIN = "FAILED_TO_LOGIN";
export const SUCCEED_TO_LOGIN = "SUCCEED_TO_LOGIN";

export const START_TO_SIGN_UP = "START_TO_SIGN_UP";
export const FAILED_TO_SIGN_UP = "FAILED_TO_SIGN_UP";
export const SUCCEED_TO_SIGN_UP = "SUCCEED_TO_SIGN_UP";

export const FAILED_TO_GET_ME = "FAILED_TO_GET_ME";
export const SUCCEED_TO_GET_ME = "SUCCEED_TO_GET_ME";

export const SUCCEED_TO_SIGN_OUT = "SUCCEED_TO_SIGN_OUT";

const ACCESS_TOKEN = "ACCESS_TOKEN";

async function storeToken(accessToken) {
  accessToken = JSON.stringify(accessToken);
  if (accessToken) return AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
  else console.log("not set, stringify failed:");
}

export const postLogin = (email, password) => {
  return async dispatch => {
    try {
      await dispatch({ type: START_TO_LOGIN });
      let response = await fetch(ServerEndPoint2 + "api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      let responseJson = await response.json();
      // console.log(responseJson);
      await dispatch({
        type: SUCCEED_TO_LOGIN,
        payload: responseJson,
        token: responseJson.token
      });
      storeToken(responseJson.token);
      return responseJson.token;
    } catch (error) {
      dispatch({ type: FAILED_TO_LOGIN, payload: { data: "NETWORK_ERROR" } });
      console.error(error);
    }
  };
};

export const postSignUp = (username, email, phone, password) => {
  return async dispatch => {
    try {
      dispatch({ type: START_TO_SIGN_UP });
      let response = await fetch(ServerEndPoint2 + "api/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          phone: phone,
          password: password
        })
      });
      let responseJson = await response.json();
      console.log(responseJson);
      await dispatch({
        type: SUCCEED_TO_SIGN_UP,
        payload: responseJson,
        token: responseJson.token
      });
      storeToken(responseJson.token);
      return responseJson.token;
    } catch (error) {
      dispatch({ type: FAILED_TO_SIGN_UP, payload: { data: "NETWORK_ERROR" } });
      console.error(error);
    }
  };
};

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
      storeToken(responseJson.token);
      return responseJson.result[0];
    } catch (error) {
      dispatch({ type: FAILED_TO_GET_ME, payload: { data: "NETWORK_ERROR" } });
      console.error(error);
    }
  };
};

export const signOut = () => {
  return async dispatch => {
    try {
      await dispatch({ type: SUCCEED_TO_SIGN_OUT });
      await AsyncStorage.removeItem("ACCESS_TOKEN");
      return "signOut";
    } catch (error) {
      console.log(error);
    }
  };
};
