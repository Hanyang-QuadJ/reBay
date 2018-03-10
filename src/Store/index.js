import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reducer from "../Reducers";
const loggerMiddleware = createLogger();




const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // Middleware for dispatch()
    loggerMiddleware,
    // Middleware for loging
)(createStore);

const store = createStoreWithMiddleware(Reducer);
export default store;






