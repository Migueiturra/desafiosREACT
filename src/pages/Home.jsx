/* import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

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
 */

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

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