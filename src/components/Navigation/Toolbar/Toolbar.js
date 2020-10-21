import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <div>MENU</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
