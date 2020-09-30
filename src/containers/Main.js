import React from "react";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Login";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Bar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>

      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
