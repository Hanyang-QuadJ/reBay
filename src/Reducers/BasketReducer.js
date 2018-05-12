import {
  SUCCEED_TO_GET_BASKET,
  FAILED_TO_GET_BASKET
} from "../Actions/BasketAction";

const initialState = {
  basket: null
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCEED_TO_GET_BASKET:
      return Object.assign({}, state, {
        basket: action.payload
      });
    case FAILED_TO_GET_BASKET:
    default:
      return state;
  }
};
export default BasketReducer;
