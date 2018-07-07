import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../actions";
import Sorted from "../../sort/views/Sorted";
import PostList from "../../post/views/List";
import { Link } from "react-router-dom";

class Category extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { category, posts } = this.props;
    return (
      <div>
        <h2>
        <Link to="/">
          Home 
        </Link>
        &nbsp;<i className=" material-icons">arrow_forward</i> {category}</h2>
        <Sorted list={posts}>{list => <PostList list={list} />}</Sorted>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, { match }) => ({
  category: match.params.category,
  posts: Object.values(posts)
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
