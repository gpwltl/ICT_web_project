import React from "react";
import Game from "../components/Game";
import Start from "../components/Start";
const Home = () => {
  return (
    <>
      <React.Fragment>
        {/* Contents */}
        <Start />
        <Game />
      </React.Fragment>
    </>
  );
};

export default Home;
