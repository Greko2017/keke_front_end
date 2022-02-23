import {
  BLOG_START,
  BLOG_SUCCESS,
  BLOG_FAIL,
  CATEGORY_SUCCESS,
  POPULAR_POSTS_SUCCESS,
  GET_POST_BY_SLUG,
  ADD_POST,
} from "./actionTypes";
// import { authAxios } from "../../utils";
// import { orderSummaryURL } from "../../constants";
// import { request, gql } from "graphql-request";
import {
  getCategories,
  getFeaturedPosts,
  getPostDetails,
  getPosts,
  submitComment,
} from "../../services/blog";

export const blogStart = () => {
  return {
    type: BLOG_START,
  };
};

export const blogSuccess = (data) => {
  return {
    type: BLOG_SUCCESS,
    data,
  };
};

export const blogFail = (error) => {
  return {
    type: BLOG_FAIL,
    error: error,
  };
};

export const fetchBlog = () => {
  // console.log(`In fetchBlog`);
  return (dispatch) => {
    dispatch(blogStart());
    getPosts()
      .then((res) => {
        dispatch(blogSuccess(res));
      })
      .catch((err) => {
        console.error(`err in fetchBlog${err}`);
        dispatch(blogFail(err));
      });
  };
};

export const categorySuccess = (data) => {
  // console.log(`data`, data);
  return {
    type: CATEGORY_SUCCESS,
    data,
  };
};

export const fetchCategory = () => {
  // console.log(`In fetchCategory`);
  return (dispatch) => {
    dispatch(blogStart());
    getCategories()
      .then((res) => {
        // console.log(`res`, res);
        dispatch(categorySuccess(res));
      })
      .catch((err) => {
        console.error(`err in fetchCategory${err}`);
        dispatch(blogFail(err));
      });
  };
};

export const popularPostsSuccess = (data) => {
  return {
    type: POPULAR_POSTS_SUCCESS,
    data,
  };
};

export const fetchPopularPosts = () => {
  return (dispatch) => {
    dispatch(blogStart());
    getFeaturedPosts()
      .then((res) => {
        dispatch(popularPostsSuccess(res));
      })
      .catch((err) => {
        console.error(`err in fetchPopularPosts${err}`);
        dispatch(blogFail(err));
      });
  };
};

export const postBySlugSuccess = (data) => {
  return {
    type: GET_POST_BY_SLUG,
    data,
  };
};

export const getPostBySlug = (slug) => {
  // console.log(`-- getPostBySlug`, slug);
  return (dispatch) => {
    dispatch(blogStart());
    getPostDetails(slug)
      .then((res) => {
        dispatch(postBySlugSuccess(res));
      })
      .catch((err) => {
        console.error(`err in getPostBySlug${err}`);
        dispatch(blogFail(err));
      });
  };
};

export const addPostSuccess = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

export const addPost = (obj) => {
  console.log(`-- addPost`, obj);
  return (dispatch) => {
    dispatch(blogStart());
    submitComment(obj)
      .then((res) => {
        dispatch(addPostSuccess(res));
        return res;
      })
      .catch((err) => {
        console.error(`err in addPost${err}`);
        dispatch(blogFail(err));
      });
  };
};
