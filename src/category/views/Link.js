import React from "react";
import { Link } from "react-router-dom";

const CategoryLink = ({ category }) => (
  <Link to={`/${category.path}`}>{category.name || category.path}</Link>
);

export default CategoryLink;
