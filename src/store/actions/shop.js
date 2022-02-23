import {
  SHOP_START,
  SHOP_SUCCESS,
  SHOP_FAIL,
  FETCH_PRODUCTS,
} from "./actionTypes";
import { categoryListURL, productListURL } from "../../constants";
import { basicAuthAxios } from "../../utils";

export const shopStart = () => {
  return {
    type: SHOP_START,
  };
};

export const shopSuccess = (data) => {
  return {
    type: SHOP_SUCCESS,
    data,
  };
};

export const shopFail = (error) => {
  return {
    type: SHOP_FAIL,
    error: error,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(shopStart());
    basicAuthAxios
      .get(categoryListURL)
      .then((res) => {
        dispatch(shopSuccess(res.data));
      })
      .catch((err) => {
        dispatch(shopFail(err));
      });
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS,
    data,
  };
};

export const fetchProducts = () => {
  // console.log(`In fetchProducts`);
  return (dispatch) => {
    dispatch(shopStart());
    basicAuthAxios
      .get(productListURL)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(shopFail(err));
      });
  };
};
