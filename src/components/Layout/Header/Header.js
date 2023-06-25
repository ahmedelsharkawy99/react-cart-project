import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
}

export default Header;
