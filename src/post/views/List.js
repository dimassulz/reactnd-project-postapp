import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CategoryLink from "../../category/views/Link";
import Icon from "../../utils/Icon";
import { votePost, deletePost } from "../actions";
import { formatTime } from "../../utils";
import { UserImg } from "../../utils/UserImg";

const PostList = ({ posts, vote, deletePost }) => (
  <div>
    {posts.length === 0 ? (
      <div className="post">
        <h4 className="center"> - NENHUM POST - </h4>
      </div>
    ) : (
      posts.map(post => (
        <div className="post" key={post.id}>
          <div className="user-block">
            <UserImg />
            <span className="username">
              <strong>{post.title} </strong>
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
              <span className="pull-right btn-box-tool">
                Categoria:{" "}
                <CategoryLink
                  category={{ path: post.category, name: post.category }}
                />
              </span>
            </span>
            <span className="description">
              Publicado por <strong>{post.author}</strong> em{" "}
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
                  vote(post.id, "upVote");
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
                  vote(post.id, "downVote");
                }}
              >
                <Icon name="thumbs-o-down" />
              </a>
            </li>
            <li>
              <Link to={`/${post.category}/${post.id}`}>
                <Icon name="comments-o" /> {post.commentCount} Veja os
                Comentários
              </Link>
            </li>
          </ul>
        </div>
      ))
    )}
  </div>
);

const mapStateToProps = (_, { list }) => ({
  posts: list
});

const mapDispatchToProps = dispatch => ({
  vote(id, option) {
    dispatch(votePost(id, option));
  },
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
