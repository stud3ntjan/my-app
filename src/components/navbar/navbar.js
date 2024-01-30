import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
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
