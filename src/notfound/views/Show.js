import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNotFound } from "../actions";
import CategoryList from "../../category/views/List";

class NotFound extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <CategoryList categories={categories} categoryActive={''} />
        <h2 className="center"> Erro 404 - Página não encontrada!</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: Object.values(categories)
});

const mapDispatchToProps = dispatch => ({
  initialize() {
    dispatch(loadNotFound());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound);
