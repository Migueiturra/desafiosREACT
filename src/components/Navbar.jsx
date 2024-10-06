import React from "react";
import Button from "react-bootstrap/Button";

function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <div className="Navbar">
      <div className="info">
        <h4>Pizzería mamma Mia!</h4>
        <Button variant="secondary">
          <i className="bi bi-pizza"></i>
          Home
        </Button>
        <Button variant="secondary">
          <i
            className={token === true ? "bi bi-lock-fill" : "bi bi-unlock"}
          ></i>{" "}
          Login
        </Button>
        <Button variant="secondary">
          <i className="bi bi-key"> </i>
          Register
        </Button>
      </div>
      <Button variant="secondary">
        <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
      </Button>
    </div>
  );
}

export default Navbar;
