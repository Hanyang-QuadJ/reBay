import { ServerEndPoint, ServerEndPoint2 } from "../Constants/server";

export const getData = async (url, params) => {
  try {
    let response = await fetch(ServerEndPoint2 + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": params.props.token && params.props.token
      }
    });
    let responseJson = await response.json();
    if (response.status === 496) {
      params.props.navigator.resetTo({
        screen: "Tutorial"
      });
      return "token_expired";
    } else {
      return responseJson;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (url, params) => {
  try {
    let response = await fetch(ServerEndPoint2 + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": params.props.token
      },
      body: JSON.stringify(params.body && params.body)
    });
    let responseJson = await response.json();
    if (response.status === 496) {
      params.props.navigator.resetTo({
        screen: "Tutorial"
      });
      return "token_expired";
    } else {
      return responseJson;
    }
  } catch (error) {
    console.error(error);
  }
};

export const patchData = async (url, params) => {
  try {
    let response = await fetch(ServerEndPoint2 + url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": params.props.token
      },
      body: JSON.stringify(params.body && params.body)
    });
    let responseJson = await response.json();
    if (response.status === 496) {
      params.props.navigator.resetTo({
        screen: "Tutorial"
      });
      return "token_expired";
    } else {
      return responseJson;
    }
  } catch (error) {
    console.error(error);
  }
};
