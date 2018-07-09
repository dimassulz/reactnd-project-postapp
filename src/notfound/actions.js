import { getAllCategories } from "../category/actions";

export const loadNotFound = () => dispatch => {
  dispatch({ type: "LOAD_NOTFOUND" });
  dispatch(getAllCategories());
};
