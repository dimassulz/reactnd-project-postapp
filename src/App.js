import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Default from "./default/views/Show";
import Category from "./category/views/Show";
import Post from "./post/views/Show";
import NewPost from "./post/views/New";
import EditPost from "./post/views/Edit";

import { Row, Col } from "react-materialize";

const App = () => (
  <div className="container">
    <div
      className="left-align"
      style={{ position: "fixed", bottom: "1vh", left: "1vw" }}
    >
      <Link to="/" className="btn-floating btn-large scale-transition">
        <i className="material-icons">home</i>
      </Link>
    </div>
    <div
      className="right-align"
      style={{ position: "fixed", bottom: "1vh", right: "1vw" }}
    >
      <Link to="/posts/new" className="btn-floating btn-large scale-transition">
        <i className="material-icons">add</i>
      </Link>
    </div>
    <Row>
      <Col s={12}>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:id/edit" component={EditPost} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={Post} />
        </Switch>
      </Col>
    </Row>
  </div>
);

export default App;
