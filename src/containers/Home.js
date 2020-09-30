import React from "react";
import Game from "../components/Game";
import Start from "../components/Start";
import Gugudan from "../games/Gugudan";
import Wordchain from "../games/Wordchain";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Contents */}
      <Start />
      <Game />
      <Switch>
        <Route path="/gugudan" component={Gugudan} />
        <Route path="/wordchain" component={Wordchain} />
      </Switch>
    </>
  );
};

export default Home;
