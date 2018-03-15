import {
    START_TO_POST_ITEM,
    START_TO_GET_ITEM,
    SUCCEED_TO_POST_ITEM,
    SUCCEED_TO_GET_ITEM,
    FAILED_TO_POST_ITEM,
    FAILED_TO_GET_ITEM,
    START_TO_GET_ITEM_PICTURE,
    FAILED_TO_GET_ITEM_PICTURE,
    SUCCEED_TO_GET_ITEM_PICTURE,
    START_TO_POST_ITEMS,
    FAILED_TO_POST_ITEMS,
    SUCCEED_TO_POST_ITEMS,

} from "../Actions/ItemAction";

const initialState = {
    item_id:0,
    item:null,
    brand_name:null,
    picture:null,
    items:null,
};

const ItemReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_GET_ITEM:
        case SUCCEED_TO_GET_ITEM:
            return Object.assign({}, state, {
                item:action.payload,
                brand_name:action.brand_name
            });
        case FAILED_TO_GET_ITEM:

        case START_TO_GET_ITEM_PICTURE:
        case SUCCEED_TO_GET_ITEM_PICTURE:
            return Object.assign({}, state, {
                picture:action.payload
            });
        case FAILED_TO_GET_ITEM_PICTURE:

        case START_TO_POST_ITEM:
        case SUCCEED_TO_POST_ITEM:
            return Object.assign({}, state, {
                item_id:action.payload
            });
        case FAILED_TO_POST_ITEM:

        case START_TO_POST_ITEMS:
        case SUCCEED_TO_POST_ITEMS:
            return Object.assign({}, state, {
                items:action.payload
            });
        case FAILED_TO_POST_ITEMS:

        default:
            return state;
    }
};
export default ItemReducer;