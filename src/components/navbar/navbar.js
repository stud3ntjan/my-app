import React from "react";
import "../../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-brand">Hallo Welt!</div>

          <div className="navbar-links">
            <div>Home</div>
            <div>Suche</div>
          </div>
        </div>

        <div className="navbar-actions">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
