import React from 'react';

const CardPizza = ({ pizza }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="card-text">Precio: ${pizza.price}</p>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;