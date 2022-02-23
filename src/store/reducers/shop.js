import {
  SHOP_START,
  SHOP_SUCCESS,
  SHOP_FAIL,
  FETCH_PRODUCTS,
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  categories: [],
  products: [],
  error: null,
  loading: false,
};

const shopStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const shopSuccess = (state, action) => {
  return updateObject(state, {
    categories: action.data,
    error: null,
    loading: false,
  });
};

const shopFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchProductSuccess = (state, action) => {
  return updateObject(state, {
    products: action.data,
    error: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP_START:
      return shopStart(state, action);
    case SHOP_SUCCESS:
      return shopSuccess(state, action);
    case FETCH_PRODUCTS:
      return fetchProductSuccess(state, action);
    case SHOP_FAIL:
      return shopFail(state, action);
    default:
      return state;
  }
};

export default reducer;
