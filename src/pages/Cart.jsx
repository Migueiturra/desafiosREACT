import React, { useState } from 'react';
import { pizzaCart } from '../components/data/pizzas';

const Carrito = () => {
  const [carrito, setCarrito] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    const carritoActualizado = [...carrito];
    for (let i = 0; i < carritoActualizado.length; i++) {
      if (carritoActualizado[i].id === id) {
        carritoActualizado[i].count += 1;
        break;
      }
    }
    setCarrito(carritoActualizado);
  };

  const disminuirCantidad = (id) => {
    const carritoActualizado = [...carrito];
    for (let i = 0; i < carritoActualizado.length; i++) {
      if (carritoActualizado[i].id === id) {
        carritoActualizado[i].count -= 1;
        if (carritoActualizado[i].count === 0) {
          carritoActualizado.splice(i, 1); 
        }
        break;
      }
    }
    setCarrito(carritoActualizado);
  };

  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Carrito de Compras</h1>
      <div className="row">
        {carrito.length === 0 ? (
          <p className="text-center">El carrito está vacío</p>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={item.img} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.count}</p>
                  <button className="btn btn-success" onClick={() => aumentarCantidad(item.id)}>+</button>
                  <button className="btn btn-danger" onClick={() => disminuirCantidad(item.id)}>-</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <h2 className="text-center">Total: ${total}</h2>
      <div className="text-center">
        <button className="btn btn-success">Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;
