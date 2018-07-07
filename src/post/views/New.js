import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNewPost, createPost } from "../actions";
import PostForm from "./Form";

class NewPost extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return (
      <div>
        <h2 className="center blue-text text-darken-1">Novo Post</h2>
        <PostForm submitAction={this.props.submit} />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  submit: createPost
});

const mapDispatchToProps = dispatch => ({
  initialize() {
    dispatch(loadNewPost());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
