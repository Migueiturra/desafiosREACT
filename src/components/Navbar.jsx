import React from "react";
import Button from "react-bootstrap/Button";

function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <div className="Navbar">
      <div className="info">
        <h4>Pizzería mamma Mia!</h4>
        <Button>
          {" "}
          <i class="bi bi-pizza"></i>
          Home
        </Button>
        <Button>
          {" "}
          <i
            className={token === true ? "bi bi-lock-fill" : "bi bi-unlock"}
          ></i>{" "}
          Login
        </Button>
        <Button>
          <i class="bi bi-key"> </i>
          Register
        </Button>
      </div>
      <Button>
        {" "}
        <i class="bi bi-cart"> </i>Total: $25.000
      </Button>
    </div>
  );
}

export default Navbar;
