import "font-awesome/css/font-awesome.css";
import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { categories } from "./category/reducers";
import { posts, postForm } from "./post/reducers";
import { comments, commentForm } from "./comment/reducers";
import { sortOption } from "./sort/reducers";

import App from "./App";

const middleware = [thunk];
const history = createHistory();
middleware.push(routerMiddleware(history));

const reducer = combineReducers({
  routerReducer,
  categories,
  posts,
  sortOption,
  postForm,
  comments,
  commentForm
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
