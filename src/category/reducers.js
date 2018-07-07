import typesCategories from "./types";

export const categories = (state = {}, action) => {
  switch (action.type) {
    case typesCategories.RECEIVE_ALL:
      return action.categories.reduce((obj, c) => {
        obj[c.path] = c;

        return obj;
      }, {});
    default:
      return state;
  }
};
