import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
      <div>MENU</div>
    </header>
  );
};

export default Toolbar;
