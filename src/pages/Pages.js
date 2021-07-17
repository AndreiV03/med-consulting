import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/Home";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}