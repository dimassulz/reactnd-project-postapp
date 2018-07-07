import { getAllCategories } from "../category/actions";
import { getAllPosts } from "../post/actions";

export const loadDefault = () => dispatch => {
  dispatch({ type: "LOAD_DEFAULT" });
  dispatch(getAllCategories());
  dispatch(getAllPosts());
};
