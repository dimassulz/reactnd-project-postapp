import { config } from "./config";

let api = config.api;
let headers = config.headers;

export const CategoriesAPI = {
  getAll(callback) {
    
    return fetch(`${api}/categories`, {
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(data => callback(data.categories));
  },

  getPosts(category, callback) {
    return fetch(`${api}/${category}/posts`, {
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(posts => callback(posts));
  }
};
