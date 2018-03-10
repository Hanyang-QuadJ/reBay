import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import {AsyncStorage} from 'react-native';

//Define Type

export const START_TO_GET_BRAND = "START_TO_GET_BRAND";
export const FAILED_TO_GET_BRAND = "FAILED_TO_GET_BRAND";
export const SUCCEED_TO_GET_BRAND = "SUCCEED_TO_GET_BRAND";


export const getBrand = (token) => {
    return async (dispatch) => {
        try {
            dispatch({type: START_TO_GET_BRAND});
            let response = await fetch(
                ServerEndPoint2 + "api/brand", {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            let responseJson = await response.json();
            // console.log(responseJson);
            await dispatch({type: SUCCEED_TO_GET_BRAND, payload: responseJson});
        } catch (error) {
            dispatch({type: FAILED_TO_GET_BRAND, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};






