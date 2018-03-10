import {
    START_TO_GET_BRAND,
    SUCCEED_TO_GET_BRAND,
    FAILED_TO_GET_BRAND

} from "../Actions/BrandAction";



const initialState = {
    brand:null

};

const BrandReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_GET_BRAND:
        case SUCCEED_TO_GET_BRAND:
            return Object.assign({}, state, {
                brand:action.payload

            });
        case FAILED_TO_GET_BRAND:

        default:
            return state;
    }
};
export default BrandReducer;