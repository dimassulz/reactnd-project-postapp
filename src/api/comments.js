import { config } from "./config";

let api = config.api;
let headers = config.headers;

export const CommentsAPI = {
  getByPost(postId, callback) {
    return fetch(`${api}/posts/${postId}/comments`, {
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(comments => callback(comments));
  },

  vote(id, option, callback) {
    return fetch(`${api}/comments/${id}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ option })
    })
      .then(res => res.json())
      .then(data => callback(data));
  },

  create(comment, callback) {
    return fetch(`${api}/comments`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => callback(data));
  },

  update(comment, callback) {
    return fetch(`${api}/comments/${comment.id}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => callback(data));
  },

  delete({ id }, callback) {
    return fetch(`${api}/comments/${id}`, {
      method: "DELETE",
      headers
    })
      .then(res => res.json())
      .then(data => callback(data));
  }
};
