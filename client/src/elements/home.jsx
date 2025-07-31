import React from "react";
import Docker from "./docker";
import Panel from "./left panel";
import Product from "./product";
import OpinionsList from "./opinions";

function Home() {
  const getOpinions = async () => await fetch("http://localhost:3000");

  return (
    <div className="container">
      <div className="panel-content-cont">
        <Panel></Panel>
        <div className="products">
          <OpinionsList></OpinionsList>
        </div>
      </div>
    </div>
  );
}

export default Home;
