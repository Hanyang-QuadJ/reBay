import {combineReducers} from 'redux';

import DefaultReducer from './DefaultReducer';
import LoginReducer from './LoginReducer';
import BrandReducer from './BrandReducer';


const Reducer = combineReducers({

    DefaultReducer,
    LoginReducer,
    BrandReducer

});
export default Reducer;