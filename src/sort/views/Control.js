import React from "react";
import { Row, Col } from "react-materialize";
import { connect } from "react-redux";
import { Icon } from "../../utils/helpers";
import { changeOptions } from "../actions";

const sortIconName = (option, field) => {
  if (field !== option.field) {
    return "sort";
  } else if (option.order > 0) {
    return "arrow-down";
  } else {
    return "arrow-up";
  }
};

const SortControl = ({ option, changeOption, fields }) => (
  <Row>
    <Col s={1}>Ordernar: </Col>
    {Object.keys(fields).map(key => (
      <Col s={3} key={key}>
        <a
          className="link"
          onClick={e => {
            e.preventDefault();
            changeOption(key);
          }}
        >
          <Icon name={sortIconName(option, key)} />
          {fields[key]}
        </a>
      </Col>
    ))}
  </Row>
);

const mapStateToProps = ({ sortOption }) => ({
  option: sortOption,
  fields: {
    timestamp: " Data",
    voteScore: " Pontuação"
  }
});

const mapDispatchToProps = dispatch => ({
  changeOption(field) {
    dispatch(changeOptions(field));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortControl);
