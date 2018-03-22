import {
    START_TO_GET_RECOMMEND,
    SUCCEED_TO_GET_RECOMMEND,
    FAILED_TO_GET_RECOMMEND

} from "../Actions/RecommendAction";

const initialState = {
    recommend:null

};

const RecommendReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_GET_RECOMMEND:
        case SUCCEED_TO_GET_RECOMMEND:
            return Object.assign({}, state, {
                recommend:action.payload

            });
        case FAILED_TO_GET_RECOMMEND:

        default:
            return state;
    }
};
export default RecommendReducer;