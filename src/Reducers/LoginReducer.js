import {
    FAILED_TO_LOGIN, FAILED_TO_SIGN_UP,
    SUCCEED_TO_LOGIN, SUCCEED_TO_SIGN_UP
} from "../Actions/LoginAction";


const initialState = {
    token: null,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCEED_TO_LOGIN:
            return Object.assign({}, state, {
                token: action.token
            });
        case FAILED_TO_LOGIN:
            return Object.assign({}, state, {
                token: null
            });
        case SUCCEED_TO_SIGN_UP:
            return Object.assign({}, state, {
                token: action.token
            });
        case FAILED_TO_SIGN_UP:
            return Object.assign({}, state, {
                token: null
            });
        default:
            return state;
    }
};
export default LoginReducer;