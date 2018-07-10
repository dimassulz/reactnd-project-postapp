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
    console.log('WSFASADSF');
    return (<div> asdfasdfasfdas aaskdfj çalksj dfçlkaj dslkfjlasd</div>);
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
