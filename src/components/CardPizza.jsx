import React from "react";
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

export default CardPizza;