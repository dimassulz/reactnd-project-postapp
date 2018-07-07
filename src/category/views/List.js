import React from "react";
import Link from "./Link";
import { Row, Col } from "react-materialize";

const List = ({ categories }) => (
  <Row>
    <Col s={12}>
      <nav className="nav-wrapper teal lighten-2">
        <a className="brand-logo">Home</a>
        <ul className="right">
          {categories.map(category => (
            <li key={category.path} >
              <Link category={category} />
            </li>
          ))}
        </ul>
      </nav>
    </Col>
  </Row>
);

export default List;
