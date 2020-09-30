import React from "react";
import Bar from "../components/Bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Login";
import Home from "./Home";
import Footer from "../components/Footer";
import { Switch, Route } from "react-router-dom";
import Gugudan from "../games/Gugudan";
import WordChain from "../games/Wordchain";

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Bar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/gugudan" component={Gugudan} />
        <Route path="/wordchain" component={WordChain} />
      </Switch>
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
