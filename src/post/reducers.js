import postTypes from "./types";
import { deleteItem } from "../utils";

export const posts = (state = {}, action) => {
  switch (action.type) {
    case postTypes.CREATED:
    case postTypes.UPDATED:
    case postTypes.VOTED:
    case postTypes.RECEIVE:
      return {
        ...state,
        [action.post.id]: action.post
      };
    case postTypes.DELETED:
      let posts = Object.values({
        ...state,
        [action.post.id]: action.post
      });
      return posts.reduce((result, item) => {
        if (!item.deleted) {
          result[item.id] = item;
        }
        return result;
      }, {});
    case postTypes.RECEIVE_BY_CATEGORY:
    case postTypes.RECEIVE_ALL:
      return deleteItem(action.posts);
    default:
      return state;
  }
};

const emptyPost = {
  title: "",
  body: "",
  author: "",
  category: ""
};

export const postForm = (state = emptyPost, action) => {
  switch (action.type) {
    case postTypes.CREATED:
    case postTypes.UPDATED:
    case postTypes.LOAD_NEW:
      return emptyPost;
    case postTypes.LOAD_EDIT:
      return {
        ...action.post
      };
    case postTypes.FORM_VALUE_CHANGED:
      const { name, value } = action.input;
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
};
