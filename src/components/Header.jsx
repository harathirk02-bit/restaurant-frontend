import React from "react";

import { Link } from "react-router-dom";

function Header() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (

    <div className="navbar">

      <Link to="/menu">
        Menu
      </Link>

      <Link to="/orders/me">
        My Orders
      </Link>

      <Link to="/orders">
        Orders
      </Link>

      <Link to="/orders/new">
        Place Order
      </Link>

      <Link to="/menu/new">
        Add Menu
      </Link>

      <Link to="/login">
        Login
      </Link>

      <Link to="/register">
        Register
      </Link>

      <button
  onClick={logout}
  style={{
    marginLeft: "auto",
    fontWeight: "bold",
    color: "white",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  Logout
</button>

    </div>
  );
}

export default Header;