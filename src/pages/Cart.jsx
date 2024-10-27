import React from "react";
import { useCart } from "../context/CartContext";
import Button from "react-bootstrap/Button";

function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="my-3">
            <h5>{item.name}</h5>
            <p>Precio: ${item.price}</p>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
    </div>
  );
}

export default Cart;
