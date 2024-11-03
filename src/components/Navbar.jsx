/* import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería mamma Mia!</Link>
        <div className="d-flex">
          <Link to="/" className="btn btn-secondary me-2">
            <i className="bi bi-pizza"></i> Home
          </Link>
          <Link to="/login" className="btn btn-secondary me-2">
            <i className={token ? "bi bi-lock-fill" : "bi bi-unlock"}></i> Login
          </Link>
          <Link to="/register" className="btn btn-secondary me-2">
            <i className="bi bi-key"></i> Register
          </Link>
          <Link to="/cart" className="btn btn-secondary">
            <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; */


/* import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
        <div className="d-flex">
          <Link to="/" className="btn btn-secondary me-2">
            <i className="bi bi-pizza"></i> Home
          </Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-secondary me-2">
                <i className="bi bi-person-circle"></i> Profile
              </Link>
              <Button onClick={logout} className="btn btn-secondary me-2">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary me-2">
                <i className="bi bi-unlock"></i> Login
              </Link>
              <Link to="/register" className="btn btn-secondary me-2">
                <i className="bi bi-key"></i> Register
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-secondary">
            <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
 */


import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
        <div className="d-flex">
          <Link to="/" className="btn btn-secondary me-2">
            <i className="bi bi-pizza"></i> Home
          </Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-secondary me-2">
                <i className="bi bi-person-circle"></i> Profile
              </Link>
              <Button onClick={logout} className="btn btn-secondary me-2">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary me-2">
                <i className="bi bi-unlock"></i> Login
              </Link>
              <Link to="/register" className="btn btn-secondary me-2">
                <i className="bi bi-key"></i> Register
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-secondary">
            <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

