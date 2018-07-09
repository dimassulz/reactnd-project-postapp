import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDefault } from "../actions";

import { Nav } from "../../utils/helpers";

class Default extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { categories, posts } = this.props;
    return <Nav categories={categories} posts={posts} />;
  }
};

const mapStateToProps = ({ categories, posts }) => ({
  categories: Object.values(categories),
  posts: Object.values(posts)
});

const mapDispatchToProps = dispatch => ({
  initialize() {
    dispatch(loadDefault());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default);
