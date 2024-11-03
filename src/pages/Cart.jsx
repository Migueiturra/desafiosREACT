/* import React from "react";
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
 */

import React from "react";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

function Cart() {
  const { token } = useUser();
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <div className="container">
      <h1 className="my-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary mt-3" disabled={!token}>
            Pagar
          </button>
          {!token && <p className="text-danger mt-2">Debes iniciar sesión para poder pagar.</p>}
        </>
      )}
    </div>
  );
}

export default Cart;
