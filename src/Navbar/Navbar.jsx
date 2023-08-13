import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div id="main">
      <div id={style.navbar}>
        <h1 id={style.logo}>
          <a href="">Halcyonic</a>
        </h1>
        <div id={style.menu}>
          <a href="./Homepage">Homepage</a>
          <a href="">Three Column</a>
          <a href="">Two Column #1</a>
          <a href="">Two Column #2</a>
          <a href="">One Column</a>
        </div>
      </div>

      <div id={style.div}></div>
    </div>
  );
};

export default Navbar;