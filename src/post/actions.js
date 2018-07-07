import { PostsAPI } from "../api/posts";
import { push } from "react-router-redux";
import { newId, newDate } from "../utils";
import typesPost from "./types";

export const getAllPosts = () => dispatch => {
  dispatch({ type: typesPost.REQUEST_ALL });

  PostsAPI.getAll(posts => {
    dispatch({
      type: typesPost.RECEIVE_ALL,
      posts
    });
  });
};

const requestPost = id => ({
  type: typesPost.REQUEST,
  id
});

const receivePost = post => ({
  type: typesPost.RECEIVE,
  post
});

export const getPost = id => dispatch => {
  dispatch(requestPost(id));

  PostsAPI.get(id, post => {
    if (post.id && post.category) {
      dispatch(receivePost(post));
    } else {
      dispatch({
        type: typesPost.REQUEST_ERROR,
        msg: post
      });
      dispatch(push("/"));
    }
  });
};

export const changePostFormInput = input => ({
  type: typesPost.FORM_VALUE_CHANGED,
  input
});

export const loadNewPost = () => ({
  type: typesPost.LOAD_NEW
});

export const createPost = post => dispatch => {
  const improvedPost = {
    ...post,
    id: newId(),
    timestamp: newDate()
  };

  dispatch({
    type: typesPost.CREATE,
    post: improvedPost
  });

  PostsAPI.create(improvedPost, post => {
    dispatch({
      type: typesPost.CREATED,
      post
    });
    dispatch(push(`/${post.category}/${post.id}`));
  });
};

export const loadEditPost = id => dispatch => {
  PostsAPI.get(id, post => {
    dispatch({
      type: typesPost.LOAD_EDIT,
      post
    });
  });
};

export const updatePost = post => dispatch => {
  dispatch({
    type: typesPost.UPDATE,
    post
  });

  PostsAPI.update(post, post => {
    dispatch({
      type: typesPost.UPDATED,
      post
    });
    dispatch(push(`/${post.category}/${post.id}`));
  });
};

export const votePost = (id, option) => dispatch => {
  dispatch({
    type: typesPost.VOTE,
    id,
    option
  });

  PostsAPI.vote(id, option, post => {
    dispatch({
      type: typesPost.VOTED,
      post
    });
  });
};

export const deletePost = id => dispatch => {
  dispatch({
    type: typesPost.DELETE,
    id
  });

  PostsAPI.delete(id, post => {
    dispatch({
      type: typesPost.DELETED,
      post
    });
    dispatch(push("/"));
  });
};
