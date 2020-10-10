import React from "react";
import Bar from "../components/Bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Login";
import Home from "./Home";
import Footer from "../components/Footer";
import { Switch, Route } from "react-router-dom";
import Gugudan from "../components/games/Gugudan";
import WordChain from "../components/games/Wordchain";
import ScrollToTop from "../ScrollToTop";
import NumberBaseball from "../components/games/NumberBaseball/NumberBaseball";
import RSP from "../components/games/RSP";

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Bar />
      {/* 새 페이지 들어갈 때 스크롤 맨 위로 */}
      <ScrollToTop />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/gugudan" component={Gugudan} />
        <Route path="/wordchain" component={WordChain} />
        <Route path="/numberbaseball" component={NumberBaseball} />
        <Route path="/rsp" component={RSP} />
      </Switch>
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
