import cuid from "cuid";
import React from "react";
import Moment from "react-moment";
import img from "./img/user-icon.png";
import CategoryList from "../category/views/List";
import Sorted from "../sort/views/Sorted";
import PostList from "../post/views/List";

Moment.globalLocale = "pt-br";
Moment.globalFormat = ` HH:mm:ss \\d\\e DD/MM/YYYY`;

export const newId = () => cuid();

export const newDate = () => Date.now();

export const formatTime = time => <Moment>{new Date(time)}</Moment>;

export const deleteItem = list =>
  list.reduce((result, item) => {
    if (!item.deleted) {
      result[item.id] = item;
    }
    return result;
  }, {});

export const Icon = ({ name }) => (
  <span className="icon">
    <i className={`fa fa-${name}`} />
  </span>
);

export const UserImg = () => (
  <img className="img-circle img-bordered-sm" src={img} alt="Img User" />
);

export const Nav = ({categories, posts, category = ''}) => (
  <div>
    <CategoryList categories={categories} categoryActive={category} />
    <br />
    <Sorted list={posts}>{list => <PostList list={list} />}</Sorted>
  </div>
);
