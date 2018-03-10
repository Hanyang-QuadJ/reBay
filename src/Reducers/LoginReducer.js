import {
    FAILED_TO_LOGIN,
    SUCCEED_TO_LOGIN
} from "../Actions/LoginAction";


const initialState = {
    loginStatus: false,
    loginResponse: null,
    token: null,
};

const LoginReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SUCCEED_TO_LOGIN:
            return Object.assign({}, state, {
                loginStatus: true,
                loginResponse: action.payload.loginResponse,
                token: action.payload.token

            });
        case FAILED_TO_LOGIN:
            return Object.assign({}, state, {
                loginStatus:false,
                token: null
            });
        default:
            return state;
    }
};
export default LoginReducer;