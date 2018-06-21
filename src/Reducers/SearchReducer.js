import {
  SUCCEED_TO_SEARCH,
  FAILED_TO_SEARCH,
  TOKEN_EXPIRED
} from "../Actions/SearchAction";

const initialState = {
  items: null
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCEED_TO_SEARCH:
      return Object.assign({}, state, {
        items: action.payload
      });
    case FAILED_TO_SEARCH:

    default:
      return state;
  }
};
export default SearchReducer;
