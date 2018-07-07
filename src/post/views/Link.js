import React from "react";
import { Link } from "react-router-dom";

const PostLink = ({ post }) => (
  <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
);

export default PostLink;
