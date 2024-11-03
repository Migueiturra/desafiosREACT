/* import React from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p className="card-text"><strong>Precio:</strong> ${pizza.price}</p>
        <Button onClick={() => addToCart(pizza)} variant="primary">Añadir al carrito</Button>
      </div>
    </div>
  );
}

export default CardPizza; */

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(pizza);
  };

  return (
    <div className="card">
    
      <Link to={`/pizza/${pizza.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
                  
          <p className="card-text">Precio: ${pizza.price}</p>
          <br />
          <h6 className="text-success">Más info</h6>
        </div>
      </Link>
     
      <button onClick={handleAddToCart} className="btn btn-primary m-3">
        Añadir al carrito
      </button>
      
    </div>
  );
}

export default CardPizza;
