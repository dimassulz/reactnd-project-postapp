import commentsTypes from "./types";
import { deleteItem } from "../utils/helpers";

export const comments = (state = {}, action) => {
  switch (action.type) {
    case commentsTypes.CREATED:
    case commentsTypes.UPDATED:
    case commentsTypes.VOTED:
      let { comment } = action;
      return {
        ...state,
        [comment.id]: comment
      };
    case commentsTypes.DELETED:
      let comments = Object.values({
        ...state,
        [action.comment.id]: action.comment
      });
      return deleteItem(comments);
    case commentsTypes.LOADED:
      return deleteItem(action.comments);
    default:
      return state;
  }
};

const emptyForm = {
  active: false,
  type: "",
  comment: {
    parentId: "",
    author: "",
    body: ""
  }
};

export const commentForm = (state = emptyForm, action) => {
  switch (action.type) {
    case commentsTypes.OPEN_NEW_FORM:
      return {
        active: true,
        type: "new",
        comment: {
          ...emptyForm.comment,
          parentId: action.parentId
        }
      };
    case commentsTypes.OPEN_EDIT_FORM:
      return {
        active: true,
        type: "edit",
        comment: action.comment
      };
    case commentsTypes.CREATED:
    case commentsTypes.UPDATED:
    case commentsTypes.CLOSE_FORM:
      return emptyForm;
    case commentsTypes.FORM_VALUE_CHANGED:
      const { name, value } = action.input;
      return {
        ...state,
        comment: {
          ...state.comment,
          [name]: value
        }
      };
    default:
      return state;
  }
};
