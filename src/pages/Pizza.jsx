/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

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
 */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Pizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  const handleBack = () => {
    navigate(-1);
  };

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
          <button onClick={handleAddToCart} className="btn btn-primary mt-3">
            Añadir al carrito
          </button>
          <button onClick={handleBack} className="btn btn-secondary mt-3 ms-2">
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
