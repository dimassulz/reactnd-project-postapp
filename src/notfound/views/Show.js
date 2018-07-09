import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNotFound } from "../actions";
import { Nav } from "../../utils/helpers";

class NotFound extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { categories } = this.props;
    return (<div><Nav categories={categories} />asdfasdasfafasfd</div>);
  }
};

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
