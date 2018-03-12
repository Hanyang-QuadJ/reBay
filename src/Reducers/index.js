import {combineReducers} from 'redux';

import DefaultReducer from './DefaultReducer';
import LoginReducer from './LoginReducer';
import BrandReducer from './BrandReducer';
import ItemReducer from './ItemReducer';


const Reducer = combineReducers({

    DefaultReducer,
    LoginReducer,
    BrandReducer,
    ItemReducer

});
export default Reducer;