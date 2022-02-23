import { data } from "jquery";
import {
  BLOG_START,
  BLOG_SUCCESS,
  BLOG_FAIL,
  CATEGORY_SUCCESS,
  POPULAR_POSTS_SUCCESS,
  GET_POST_BY_SLUG,
  ADD_POST,
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  posts: [],
  error: null,
  loading: false,
  categories: [],
  popular_posts: [],
  post: {},
};

const blogStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const blogSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.data,
    error: null,
    loading: false,
  });
};

const blogFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const categorySuccess = (state, action) => {
  return updateObject(state, {
    categories: action.data,
    error: null,
    loading: false,
  });
};
const popularPostsSuccess = (state, action) => {
  return updateObject(state, {
    popular_posts: action.data,
    error: null,
    loading: false,
  });
};

const postBySlugSuccess = (state, action) => {
  return updateObject(state, {
    post: action.data,
    error: null,
    loading: false,
  });
};

const addPostSuccess = (state, action) => {
  console.log(`In addPostSuccess action:>>`, action);
  return updateObject(state, {
    post: {
      ...state.post,
      comments: [action.data, ...state.post.comments],
    },
    error: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_START:
      return blogStart(state, action);
    case BLOG_SUCCESS:
      return blogSuccess(state, action);
    case BLOG_FAIL:
      return blogFail(state, action);
    case CATEGORY_SUCCESS:
      return categorySuccess(state, action);
    case POPULAR_POSTS_SUCCESS:
      return popularPostsSuccess(state, action);
    case GET_POST_BY_SLUG:
      return postBySlugSuccess(state, action);
    case ADD_POST:
      return addPostSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
