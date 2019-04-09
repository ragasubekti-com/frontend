import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./views/Home";
import Blog from "./views/Blog";
import Projects from "./views/Projects";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/projects" component={Projects} />
  </BrowserRouter>
);

export default Routes;
