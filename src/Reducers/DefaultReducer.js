import {
    START_TO_FETCH,
    SUCCEED_TO_FETCH,
    FAILED_TO_FETCH

} from "../Actions/DefaultAction";



const initialState = {
    data:null,
    loading:true
};

const DefaultReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_FETCH:
            return Object.assign({}, state, {
                loading:action.loading
            });
        case SUCCEED_TO_FETCH:
            return Object.assign({}, state, {
                data:action.payload,
                loading:action.loading
            });
        case FAILED_TO_FETCH:

        default:
            return state;
    }
};
export default DefaultReducer;