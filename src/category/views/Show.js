import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../actions";
import CategoryList from "../../category/views/List";
import Sorted from "../../sort/views/Sorted";
import PostList from "../../post/views/List";
import { Nav } from "../../utils/helpers";

class Category extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.category !== this.props.category) {
      this.props = newProps;
      this.props.initialize();
    }
  }

  render() {
    const { category, posts, categories } = this.props;
    return <Nav categories={categories} posts={posts} category={category} />;
  }
}

const mapStateToProps = ({ posts, categories }, { match }) => ({
  category: match.params.category,
  posts: Object.values(posts),
  categories: Object.values(categories)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  initialize() {
    dispatch(getPostsByCategory(match.params.category));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
