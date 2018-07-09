import commentsTypes from "./types";
import { CommentsAPI } from "../api/comments";
import { newId, newDate } from "../utils/helpers";

export const getCommentsByPost = postId => dispatch => {
  dispatch({
    type: commentsTypes.LOAD,
    postId
  });

  CommentsAPI.getByPost(postId, comments => {
    dispatch({
      type: commentsTypes.LOADED,
      postId,
      comments
    });
  });
};

export const voteComment = (id, option) => dispatch => {
  dispatch({
    type: commentsTypes.VOTE,
    id,
    option
  });

  CommentsAPI.vote(id, option, comment => {
    dispatch({
      type: commentsTypes.VOTED,
      comment
    });
  });
};

export const changeCommentFormInput = input => ({
  type: commentsTypes.FORM_VALUE_CHANGED,
  input
});

export const openNewCommentForm = parentId => ({
  type: commentsTypes.OPEN_NEW_FORM,
  parentId
});

export const openEditCommentForm = comment => ({
  type: commentsTypes.OPEN_EDIT_FORM,
  comment
});

export const closeCommentForm = () => ({
  type: commentsTypes.CLOSE_FORM
});

export const createComment = comment => dispatch => {
  const improvedComment = {
    ...comment,
    id: newId(),
    timestamp: newDate()
  };

  dispatch({
    type: commentsTypes.CREATE,
    comment: improvedComment
  });

  CommentsAPI.create(improvedComment, comment => {
    dispatch({
      type: commentsTypes.CREATED,
      comment
    });
  });
};

export const updateComment = comment => dispatch => {
  const improvedComment = {
    ...comment,
    timestamp: newDate()
  };

  dispatch({
    type: commentsTypes.UPDATE,
    comment: improvedComment
  });

  CommentsAPI.update(improvedComment, comment => {
    dispatch({
      type: commentsTypes.UPDATED,
      comment
    });
  });
};

export const deleteComment = comment => dispatch => {
  dispatch({
    type: commentsTypes.DELETE,
    comment
  });

  CommentsAPI.delete(comment, comment => {
    dispatch({
      type: commentsTypes.DELETED,
      comment
    });
  });
};
