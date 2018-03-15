import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";

export const START_TO_GET_RECOMMEND  = "START_TO_GET_RECOMMEND";
export const SUCCEED_TO_GET_RECOMMEND = "SUCCEED_TO_GET_RECOMMEND";
export const FAILED_TO_GET_RECOMMEND = "FAILED_TO_GET_RECOMMEND";

export const getRecommend = (token) => {
    return async (dispatch) => {
        try {
            dispatch({type: START_TO_GET_RECOMMEND});
            let response = await fetch(
                ServerEndPoint2 + "api/item/recent", {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                }
            );
            let responseJson = await response.json();
            // console.log(responseJson);
            await dispatch({type: SUCCEED_TO_GET_RECOMMEND, payload: responseJson});

        } catch (error) {
            dispatch({type: FAILED_TO_GET_RECOMMEND, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};