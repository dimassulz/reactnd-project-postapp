import React from "react";
import { connect } from "react-redux";
import { voteComment, openEditCommentForm, deleteComment } from "../actions";
import { formatTime } from "../../utils/helpers";
import { Icon, UserImg } from "../../utils/helpers";
import EditComment from "./Edit";

const CommentList = ({
  comments,
  openEditCommentForm,
  vote,
  deleteComment
}) => (
  <div>
    {comments.length > 0 ? <h4>Comentários</h4> : ""}
    <EditComment />
    {comments.map(c => (
      <div className="post" style={{ paddingLeft: "5%" }} key={c.id}>
        <div className="user-block">
          <UserImg />
          <span className="username">
            <strong>{c.author} </strong>
            <a
              className="link"
              onClick={e => {
                e.preventDefault();
                openEditCommentForm(c);
              }}
            >
              <Icon name="pencil" />{" "}
            </a>
            <a
              className="link"
              onClick={e => {
                e.preventDefault();
                if (
                  window.confirm("Deseja realmente deletar esse comentario?")
                ) {
                  deleteComment(c);
                }
              }}
            >
              <Icon name="trash" />
            </a>
          </span>
          <span className="description">
            Publicado em {formatTime(c.timestamp)}
          </span>
        </div>
        <h4>{c.title}</h4>
        <p>{c.body}</p>
        <ul className="list-inline">
          <li>
            <strong>{c.voteScore}</strong>
          </li>
          <li>
            <a
              className="link-black text-sm"
              style={{ cursor: "pointer" }}
              title="Gostei"
              onClick={e => {
                e.preventDefault();
                vote(c.id, "upVote");
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
                vote(c.id, "downVote");
              }}
            >
              <Icon name="thumbs-o-down" />
            </a>
          </li>
        </ul>
      </div>
    ))}
  </div>
);

const mapStateToProps = (_, { list }) => ({
  comments: list
});

const mapDispatchToProps = (dispatch, { parentId }) => ({
  vote(id, option) {
    dispatch(voteComment(id, option));
  },
  openEditCommentForm(comment) {
    dispatch(openEditCommentForm(comment));
  },
  deleteComment(comment) {
    dispatch(deleteComment(comment));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
