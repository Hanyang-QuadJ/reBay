import {combineReducers} from 'redux';

import DefaultReducer from './DefaultReducer';
import LoginReducer from './LoginReducer';
import BrandReducer from './BrandReducer';
import ItemReducer from './ItemReducer';
import RecommendReducer from './RecommendReducer';


const Reducer = combineReducers({

    DefaultReducer,
    LoginReducer,
    BrandReducer,
    ItemReducer,
    RecommendReducer,

});
export default Reducer;