import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./data/pizzas";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Nuestras Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;