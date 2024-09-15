import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} className="pizzas" />
        <Card.Body>
          <Card.Title> Pizza {name} </Card.Title>
          <Card.Text>Ingredientes: <br /> <br /> {ingredients.join(", ")}</Card.Text>
          <div className="cardabajo">
          <Card.Text style={{fontSize:'25px', fontWeight:'400'}}>Precio: {price}</Card.Text>
          <div className="botones">
            <Button variant="primary"><i class="bi bi-eye"> </i>Ver más</Button>
            <Button variant="primary"><i class="bi bi-cart"> </i>Añadir</Button>
          </div></div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPizza;
