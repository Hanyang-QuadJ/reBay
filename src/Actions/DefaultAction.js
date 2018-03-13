import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import {AsyncStorage} from 'react-native';
import  axios  from 'axios';

//Define Type

export const START_TO_FETCH = "START_TO_FETCH";
export const FAILED_TO_FETCH = "FAILED_TO_FETCH";
export const SUCCEED_TO_FETCH = "SUCCEED_TO_FETCH";

const SAMPLE_STORAGE = "SAMPLE_STORAGE";

//LocalStorage
function sampleStore(data) {
    try {
        AsyncStorage.setItem(SAMPLE_STORAGE, data);


    } catch (error) {
        console.log(error)
    }

}

export const  defaultFetch = () => {
    return async (dispatch) => {
        try {
            dispatch({type: START_TO_FETCH, loading:true});
            await axios.get(
                'https://facebook.github.io/react-native/movies.json',{
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            ).then((response) => {dispatch({type: SUCCEED_TO_FETCH, payload: response.data, loading:false});

                }

            );
        } catch (error) {
            dispatch({type: FAILED_TO_FETCH, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};






