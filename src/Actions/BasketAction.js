export const SUCCEED_TO_POST_BASKET = "SUCCEED_TO_POST_BASKET";
export const FAILED_TO_POST_BASKET = "FAILED_TO_POST_BASKET";

import {ServerEndPoint2} from "../Constants/server";

export const postBasket = (params) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                ServerEndPoint2 + 'api/temp/'+params.id, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            let responseJson = await response.json();
            // console.log(responseJson);
            await dispatch({type: SUCCEED_TO_POST_BASKET, payload: responseJson});
            return responseJson;
        } catch (error) {
            dispatch({type: FAILED_TO_POST_BASKET, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};