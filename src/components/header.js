import React from "react";
import logo from "../images/BCIT_LOGO.png";

function Header() {
    return <header className="App-header">
    <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="HeaderText">
        <h2>BCIT Computing</h2>
        <h4>For a Complex World</h4>
      </div>
    </div>
  </header>;
  }

export default Header