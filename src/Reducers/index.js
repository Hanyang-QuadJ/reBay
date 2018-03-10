import {combineReducers} from 'redux';

import DefaultReducer from './DefaultReducer';
import LoginReducer from './LoginReducer';


const Reducer = combineReducers({

    DefaultReducer,
    LoginReducer,

});
export default Reducer;