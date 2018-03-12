import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";


//아이템 하나 가져오기
export const START_TO_GET_ITEM = "START_TO_GET_ITEM";
export const FAILED_TO_GET_ITEM = "FAILED_TO_GET_ITEM";
export const SUCCEED_TO_GET_ITEM = "SUCCEED_TO_GET_ITEM";

//아이템 사진 가져오기
export const START_TO_GET_ITEM_PICTURE = "START_TO_GET_ITEM_PICTURE";
export const FAILED_TO_GET_ITEM_PICTURE = "FAILED_TO_GET_ITEM_PICTURE";
export const SUCCEED_TO_GET_ITEM_PICTURE = "SUCCEED_TO_GET_ITEM_PICTURE";

//아이템 등록하기
export const START_TO_POST_ITEM = "START_TO_POST_ITEM";
export const FAILED_TO_POST_ITEM = "FAILED_TO_POST_ITEM";
export const SUCCEED_TO_POST_ITEM = "SUCCEED_TO_POST_ITEM";

//아이템 걸러서 여러개 가져오기
export const START_TO_POST_ITEMS = "START_TO_POST_ITEMS";
export const FAILED_TO_POST_ITEMS = "FAILED_TO_POST_ITEMS";
export const SUCCEED_TO_POST_ITEMS = "SUCCEED_TO_POST_ITEMS";

const ACCESS_TOKEN = "ACCESS_TOKEN";


export const getItem = (token, id) => {

    return async (dispatch) => {
        try {
            await dispatch({type: START_TO_GET_ITEM});
            let response = await fetch(
                ServerEndPoint2 + "api/item/one/" + id, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                }
            );
            let responseJson = await response.json();
            dispatch({type: SUCCEED_TO_GET_ITEM, payload: responseJson.item});
            return responseJson;
        } catch (error) {
            dispatch({type: FAILED_TO_GET_ITEM, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }
};

export const getItemPicture = (token, id) => {

    return async (dispatch) => {
        try {
            await dispatch({type: START_TO_GET_ITEM_PICTURE});
            let response = await fetch(
                ServerEndPoint2 + "api/item/pic/" + id, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                }
            );
            let responseJson = await response.json();
            dispatch({type: SUCCEED_TO_GET_ITEM_PICTURE, payload: responseJson.result});
            return responseJson.result;
        } catch (error) {
            dispatch({type: FAILED_TO_GET_ITEM_PICTURE, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }
};


export const postItem = (token,
                         pic_list,
                         item_name,
                         price,
                         brand_id,
                         size,
                         season,
                         category_1,
                         category_2,
                         item_status,
                         fullbox,
                         warantee,
                         domestic,
                         refund,
                         content,
                         sub_content,
                         tags) => {
    return async (dispatch) => {
        try {
            // console.log("^^^^^");
            // console.log(token);
            // console.log(price);
            await dispatch({type: START_TO_POST_ITEM});
            let response = await fetch(
                ServerEndPoint2 + 'api/item/sell', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                    body: JSON.stringify({
                        pic_list: pic_list,
                        item_name: item_name,
                        price: price,
                        brand_id: brand_id,
                        size: size,
                        season: season,
                        category_1: category_1,
                        category_2: category_2,
                        item_status: item_status,
                        fullbox: fullbox,
                        warantee: warantee,
                        domestic: domestic,
                        refund: refund,
                        content: content,
                        sub_content: sub_content,
                        tags: tags
                    })
                }
            );
            let responseJson = await response.json();
            // console.log(responseJson);
            await dispatch({type: SUCCEED_TO_POST_ITEM, payload: responseJson.item_id});
            return responseJson.item_id;
        } catch (error) {
            dispatch({type: FAILED_TO_POST_ITEM, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};

export const postItems = (token, category_1, category_2, item_status, season, max_price, min_price, index) => {

    return async (dispatch) => {
        try {
            await dispatch({type: START_TO_POST_ITEMS});
            let response = await fetch(
                ServerEndPoint2 + "api/search", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                    body: JSON.stringify({
                        category_1: category_1,
                        category_2: category_2,
                        item_status: item_status,
                        season: season,
                        max_price: max_price,
                        min_price: min_price,
                        index: index,
                    })
                }
            );
            let responseJson = await response.json();
            dispatch({type: SUCCEED_TO_POST_ITEMS, payload: responseJson});
            return responseJson;
        } catch (error) {
            dispatch({type: FAILED_TO_POST_ITEMS, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }
};