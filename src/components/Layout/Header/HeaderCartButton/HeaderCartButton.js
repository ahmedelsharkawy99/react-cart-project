import { useContext, useEffect, useState } from "react";

import CartIcon from "../../../Cart/CartIcon/CartIcon";
import CartContext from "../../../../context/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (prev, cur) => prev + cur.amount,
    0
  );

  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnAnimation(true);

    const timer = setTimeout(() => setBtnAnimation(false), 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
