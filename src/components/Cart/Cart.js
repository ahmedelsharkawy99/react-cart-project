import { useContext, useState } from "react";

import Modal from "../UI/Overlays/Modal";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
import Loader from "../UI/Loader/Loader";
import CartContext from "../../context/cart-context";

import classes from "./Cart.module.css";
import React from "react";
import useHttp from "../../hooks/use-http";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isChekout, setIsCheckout] = useState(false);
  const [didSubmited, setDidSubmited] = useState(false);
  const { sendRequest: sendOrder, isLoading, error } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => cartCtx.addItem({ ...item, amount: 1 });
  const cartItemRemoveHandler = (id) => cartCtx.removeItem(id);
  const showCheckoutHandler = () => setIsCheckout(true);

  const confirmOrederHandler = async (userData) => {
    await sendOrder(
      "https://react-http-635fa-default-rtdb.firebaseio.com/orders.json",
      {
        user: userData,
        orderItems: cartCtx.items,
        total: totalAmount,
      }
    );
    setDidSubmited(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && !isChekout && (
        <button className={classes.button} onClick={showCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChekout && (
        <Checkout
          onConfirm={confirmOrederHandler}
          onCansel={props.onHideCart}
        />
      )}
      {!isChekout && modalActions}
    </React.Fragment>
  );

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order</p>
      {modalActions}
    </React.Fragment>
  );
  const hasError = (
    <React.Fragment>
      <p>{error}</p>
      {modalActions}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {!isLoading && (
        <Modal onHideCart={props.onHideCart}>
          {!isLoading && !didSubmited && !error && cartModalContent}
          {!isLoading && error && hasError}
          {!isLoading && !error && didSubmited && didSubmitModalContent}
        </Modal>
      )}
    </React.Fragment>
  );
}

export default Cart;
