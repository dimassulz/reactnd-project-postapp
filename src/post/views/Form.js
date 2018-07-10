import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changePostFormInput } from "../actions";
import { getAllCategories } from "../../category/actions";

class PostForm extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { categories, post, submit, formChanged } = this.props;
    const { title, body, author, category } = post;
    const handleChange = event => {
      const { type, name, value } = event.target;
      formChanged({ type, name, value });
    };

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          submit(post);
        }}
      >
        <div className="form-group">
          <label>Categoria</label>
          <select
            id="post_category"
            name="category"
            className="form-control"
            value={category}
            required
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione
            </option>
            {categories.map(c => (
              <option key={c.path} value={c.path}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Autor</label>
          <input
            type="text"
            id="post_author"
            name="author"
            placeholder="Digite o nome do autor"
            value={author}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            id="post_title"
            name="title"
            placeholder="Digite o título do post"
            value={title}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Post</label>
          <div className="control">
            <textarea
              id="post_body"
              name="body"
              placeholder="Digite aqui o conteúdo do seu post"
              value={body}
              required
              className="form-control"
              rows="8"
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
            <Link
              to={`/${post.category}`}
              className="waves-effect waves-light btn deep-orange lighten-1"
            >
              <i className="material-icons left">cancel</i>Cancelar
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ postForm, categories }) => ({
  post: postForm,
  categories: Object.values(categories)
});

const mapDispatchToProps = (dispatch, { submitAction }) => ({
  initialize() {
    dispatch(getAllCategories());
  },
  formChanged(input) {
    dispatch(changePostFormInput(input));
  },
  submit(post) {
    dispatch(submitAction(post));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
