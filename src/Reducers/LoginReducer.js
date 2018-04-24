import {AsyncStorage} from 'react-native'
import {
    FAILED_TO_LOGIN, FAILED_TO_SIGN_UP,
    SUCCEED_TO_LOGIN, SUCCEED_TO_SIGN_UP, SUCCEED_TO_SIGN_OUT
} from "../Actions/LoginAction";


const initialState = {
    token: null,
    isLogin: null
};

AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
    return Object.assign(initialState, {
        token: value,
        isLogin: !!value
    })
});


const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCEED_TO_LOGIN:
            return Object.assign({}, state, {
                token: action.token,
                isLogin: true
            });
        case FAILED_TO_LOGIN:
            return Object.assign({}, state, {
                token: null,
                isLogin: false

            });
        case SUCCEED_TO_SIGN_UP:
            return Object.assign({}, state, {
                token: action.token,
                isLogin: true

            });
        case FAILED_TO_SIGN_UP:
            return Object.assign({}, state, {
                token: null,
                isLogin: false
            });
        case SUCCEED_TO_SIGN_OUT:
            return Object.assign({}, state, {
                token: null,
                isLogin: false
            });
        default:
            return state;
    }
};
export default LoginReducer;