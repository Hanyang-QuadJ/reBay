import {
  SUCCEED_TO_POST_ITEM,
  SUCCEED_TO_GET_ITEM,
  FAILED_TO_POST_ITEM,
  FAILED_TO_GET_ITEM,
  FAILED_TO_GET_ITEM_PICTURE,
  SUCCEED_TO_GET_ITEM_PICTURE,
  FAILED_TO_POST_ITEMS,
  SUCCEED_TO_POST_ITEMS,
  FAILED_TO_GET_HELP_BY_HELP_ID,
  SUCCEED_TO_GET_HELP_BY_HELP_ID,
  SUCCEED_TO_EDIT_BRAND
} from "../Actions/ItemAction";

const initialState = {
  item_id: 0,
  item: [],
  brand_name: [],
  picture: [],
  items: [],
  tags: []
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCEED_TO_GET_ITEM:
      return Object.assign({}, state, {
        item: action.payload,
        brand_name: action.brand_name.brand_name,
        tags: action.tags
      });
    case FAILED_TO_GET_ITEM:

    case SUCCEED_TO_GET_ITEM_PICTURE:
      return Object.assign({}, state, {
        picture: action.payload
      });
    case FAILED_TO_GET_ITEM_PICTURE:

    case SUCCEED_TO_POST_ITEM:
      return Object.assign({}, state, {
        item_id: action.payload
      });
    case FAILED_TO_POST_ITEM:

    case SUCCEED_TO_POST_ITEMS:
      return Object.assign({}, state, {
        items: action.payload
      });
    case FAILED_TO_POST_ITEMS:

    case SUCCEED_TO_GET_HELP_BY_HELP_ID:
      return Object.assign({}, state, {
        help: action.payload
      });

    case FAILED_TO_GET_HELP_BY_HELP_ID:
    case SUCCEED_TO_EDIT_BRAND:
      return Object.assign({}, state, {
        brand_name: action.payload
      });

    default:
      return state;
  }
};
export default ItemReducer;
