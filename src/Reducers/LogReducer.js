import {
  FAILED_TO_GET_LOG,
  SUCCEED_TO_GET_LOG,
  SUCCEED_TO_GET_NOTICE_COUNT
} from "../Actions/LogAction";

const initialState = {
  log: [],
  notice_count: 0
};

const LogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCEED_TO_GET_LOG:
      return Object.assign({}, state, {
        log: action.payload
      });
    case SUCCEED_TO_GET_NOTICE_COUNT:
      return Object.assign({}, state, {
        notice_count: action.payload
      });
    // case FAILED_TO_GET_L:

    default:
      return state;
  }
};
export default LogReducer;
