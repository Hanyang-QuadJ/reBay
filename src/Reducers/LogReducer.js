import {
  FAILED_TO_GET_LOG,
  SUCCEED_TO_GET_LOG
} from "../Actions/LogAction";

const initialState = {
  log: []

};

const LogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCEED_TO_GET_LOG:
      return Object.assign({}, state, {
        log: action.payload
      });
    // case FAILED_TO_GET_L:

    default:
      return state;
  }
};
export default LogReducer;