import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import { AsyncStorage } from 'react-native';

export const START_TO_LOGIN = "START_TO_LOGIN";
export const FAILED_TO_LOGIN = "FAILED_TO_LOGIN";
export const SUCCEED_TO_LOGIN = "SUCCEED_TO_LOGIN";

const ACCESS_TOKEN = "ACCESS_TOKEN";

function storeToken(accessToken) {
    try {
        AsyncStorage.setItem(ACCESS_TOKEN, accessToken);


    } catch (error) {
        console.log(error)
    }

}


export const postLogin = (email, password) => {

    return (dispatch) => {
        dispatch({type: START_TO_LOGIN});
        fetch(ServerEndPoint2 + "api/auth/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })

            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    return response.json()
                        .then(responseData => {
                                dispatch({type: SUCCEED_TO_LOGIN, payload: {loginResponse: responseData, token: responseData.token}});
                                storeToken(responseData.token);
                            }
                        )
                }
                else {
                    return response.json()
                        .then(responseData => (
                            dispatch({type: FAILED_TO_LOGIN, payload: {loginResponse: responseData}})
                        ))
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

};




