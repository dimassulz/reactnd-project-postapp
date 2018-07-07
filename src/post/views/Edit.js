import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./Form";
import { loadEditPost, updatePost } from "../actions";

class EditPost extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return (
      <div>
        <h2 className="center blue-text text-darken-1">Editando Post</h2>
        <PostForm submitAction={this.props.submit} />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  submit: updatePost
});

const mapDispatchToProps = (dispatch, { match }) => ({
  initialize() {
    dispatch(loadEditPost(match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
