import { config } from "./config";

let api = config.api;
let headers = config.headers;

export const PostsAPI = {
  getAll(callback) {
    return fetch(`${api}/posts`, {
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(posts => callback(posts));
  },

  get(id, callback) {
    return fetch(`${api}/posts/${id}`, {
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(post => callback(post));
  },

  vote(id, option, callback) {
    return fetch(`${api}/posts/${id}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ option })
    })
      .then(res => res.json())
      .then(post => callback(post));
  },

  create(post, callback) {
    return fetch(`${api}/posts`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => callback(post));
  },

  update(post, callback) {
    return fetch(`${api}/posts/${post.id}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => callback(post));
  },

  delete(id, callback) {
    return fetch(`${api}/posts/${id}`, {
      method: "DELETE",
      headers
    })
      .then(res => res.json())
      .then(post => callback(post));
  }
};
