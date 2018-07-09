import React from "react";
import { connect } from "react-redux";
import {Icon} from "../../utils/helpers";
import { changeCommentFormInput, closeCommentForm } from "../actions";

const CommentForm = ({
  title,
  active,
  comment,
  formChanged,
  submit,
  cancel
}) => {
  const handleChange = event => {
    const { type, name, value } = event.target;
    formChanged({ type, name, value });
  };
  return (
    <div className={`box box-info ${active ? "show" : "hidden"}`}>
      <div className="box-header with-border">
        <h3 className="box-title">{title}</h3>
        <a className="pull-right btn-box-tool" onClick={cancel}>
          <Icon name="times" />
        </a>
      </div>
      <div className="box-body">
        <form
          onSubmit={e => {
            e.preventDefault();
            submit(comment);
          }}
        >
          <div className="form-group">
            <label>Autor</label>
            <input
              type="text"
              id="comment_author"
              name="author"
              required
              placeholder="Digite o nome do autor"
              className="form-control"
              value={comment.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Comentario</label>
            <div className="control">
              <textarea
                className="form-control"
                id="comment_body"
                name="body"
                required
                placeholder="Digite aqui o conteúdo do seu comentario"
                rows="8"
                value={comment.body}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="control">
              <button
                type="submit"
                className=" pull-right waves-effect waves-light btn"
              >
                <i className="material-icons right">send</i>Salvar
              </button>
              <button
                type="button"
                className="waves-effect waves-light btn deep-orange lighten-1"
                onClick={cancel}
              >
                <i className="material-icons left">cancel</i>Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ commentForm }) => ({
  comment: commentForm.comment,
  active: commentForm.active
});

const mapDispatchToProps = (dispatch, { submitAction }) => ({
  formChanged(input) {
    dispatch(changeCommentFormInput(input));
  },
  submit(comment) {
    dispatch(submitAction(comment));
  },
  cancel() {
    dispatch(closeCommentForm());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
