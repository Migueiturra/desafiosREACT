/* import React, { useEffect, useState } from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizzas(data);
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>Pizzería Mamma Mía</h1>
      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <h2>{pizza.name}</h2>
            <p>Precio: ${pizza.price}</p>
            <img src={pizza.image} alt={pizza.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; */

import React, { useEffect, useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-detail container">
      <h2 className="text-center my-4">{pizza.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Precio: ${pizza.price}</h3>
          <p>{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
