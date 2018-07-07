import typesCategories from "./types";
import typesPost from "../post/types";
import { CategoriesAPI } from "../api/categories";

export const getAllCategories = () => dispatch => {
  dispatch({ type: typesCategories.REQUEST_ALL });

  CategoriesAPI.getAll(categories => {
    dispatch({
      type: typesCategories.RECEIVE_ALL,
      categories
    });
  });
};

const requestPostsByCategory = category => ({
  type: typesPost.REQUEST_BY_CATEGORY,
  category
});

const receivePostsByCategory = (category, posts) => ({
  type: typesPost.RECEIVE_BY_CATEGORY,
  category,
  posts
});

export const getPostsByCategory = category => dispatch => {
  dispatch(requestPostsByCategory(category));

  CategoriesAPI.getPosts(category, posts => {
    dispatch(receivePostsByCategory(category, posts));
  });
};
