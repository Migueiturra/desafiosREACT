import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"; // Importamos Link para las rutas

function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <div className="Navbar">
      <div className="info">
        <h4>Pizzería mamma Mia!</h4>
        {/* Usamos Link para las rutas */}
        <Link to="/" className="text-decoration-none">
          <Button variant="secondary">
            <i className="bi bi-pizza"></i> Home
          </Button>
        </Link>
        <Link to="/login" className="text-decoration-none">
          <Button variant="secondary">
            <i className={token === true ? "bi bi-lock-fill" : "bi bi-unlock"}></i> Login
          </Button>
        </Link>
        <Link to="/register" className="text-decoration-none">
          <Button variant="secondary">
            <i className="bi bi-key"></i> Register
          </Button>
        </Link>
      </div>
      <Link to="/cart" className="text-decoration-none">
        <Button variant="secondary">
          <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
