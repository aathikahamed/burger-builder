import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Home
      </NavigationItem>
      <NavigationItem link="/">About</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
