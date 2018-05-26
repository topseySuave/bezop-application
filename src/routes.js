import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import NotFoundPage from "./containers/NotFoundPage.js";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import Dashboard from "./containers/DashboardPage";
import AddFilePage from "./containers/AddFilePage";
import ArchievePage from "./containers/ArchievePage";
import TrashPage from "./containers/TrashPage";

export default (
  <Route>
    <Route path="login" component={LoginPage} />
    <Route path="register" component={RegisterPage} />
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="add" component={AddFilePage} />
      <Route path="archive" component={ArchievePage} />
      <Route path="trash" component={TrashPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
