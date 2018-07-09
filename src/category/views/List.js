import React from "react";
import Link from "./Link";
import { Row, Col } from "react-materialize";

const List = ({ categories, categoryActive }) => (
  <Row>
    <Col s={12}>
      <nav className="nav-wrapper teal lighten-2">
        {categoryActive === "" ? (
          <a className="brand-logo" href="/">
            Home
          </a>
        ) : (
          <a className="brand-logo" href="/">
            Home - {categoryActive}
          </a>
        )}

        <ul className="right">
          {categories.map(category => (
            <li key={category.path}>
              <Link category={category} />
            </li>
          ))}
        </ul>
      </nav>
    </Col>
  </Row>
);

export default List;
