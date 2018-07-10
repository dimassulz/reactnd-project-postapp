import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPost, votePost, deletePost } from "../actions";
import Sorted from "../../sort/views/Sorted";
import CommentList from "../../comment/views/List";
import { Icon, UserImg } from "../../utils/helpers";
import CategoryList from "../../category/views/List";
import { formatTime } from "../../utils/helpers";
import { getCommentsByPost, openNewCommentForm } from "../../comment/actions";
import NewComment from "../../comment/views/New";

class Show extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const {
      id,
      post,
      comments,
      vote,
      deletePost,
      addComment,
      categories,
      match
    } = this.props;
    return (
      <div className="post">
        <CategoryList
          categories={categories}
          categoryActive={match.params.category}
        />
        <div className="user-block">
          <UserImg />
          <span className="username">
            <strong>{post.title}</strong>

            <span className="pull-right btn-box-tool">
              <Link to={`/posts/${post.id}/edit`} className="link">
                <Icon name="pencil" />{" "}
              </Link>
              <a
                className="link"
                onClick={e => {
                  e.preventDefault();
                  if (window.confirm("Deseja realmente deletar esse post?")) {
                    deletePost(post.id);
                  }
                }}
              >
                <Icon name="trash" />
              </a>
            </span>
          </span>
          <span className="description">
            Publicado por <strong>{post.author} </strong> em{" "}
            {formatTime(post.timestamp)}
          </span>
        </div>

        <p>{post.body}</p>
        <ul className="list-inline">
          <li>
            <strong>{post.voteScore}</strong>
          </li>
          <li>
            <a
              className="link-black text-sm"
              style={{ cursor: "pointer" }}
              title="Gostei"
              onClick={e => {
                e.preventDefault();
                vote("upVote");
              }}
            >
              <Icon name="thumbs-o-up" />
            </a>
          </li>
          <li>
            <a
              className="link-black text-sm"
              style={{ cursor: "pointer" }}
              title="Não Gostei"
              onClick={e => {
                e.preventDefault();
                vote("downVote");
              }}
            >
              <Icon name="thumbs-o-down" />
            </a>
          </li>
          <li>
            <strong> {comments.length} Comentários</strong>
          </li>
          <li className="pull-right">
            <button
              type="button"
              className=" pull-right waves-effect waves-light btn"
              onClick={addComment}
            >
              Novo Comentário
            </button>
          </li>
        </ul>
        <hr />
        <NewComment />
        <Sorted list={comments}>
          {list => <CommentList list={list} parentId={id} />}
        </Sorted>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, comments, categories }, { match }) => {
  const id = match.params.post_id;
  return {
    id,
    post: posts[id] || {},
    comments: Object.values(comments),
    categories: Object.values(categories)
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const id = match.params.post_id;
  return {
    initialize() {
      dispatch(getPost(id));
      dispatch(getCommentsByPost(id));
    },
    vote(option) {
      dispatch(votePost(id, option));
    },
    deletePost() {
      dispatch(deletePost(id));
    },
    addComment() {
      dispatch(openNewCommentForm(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
