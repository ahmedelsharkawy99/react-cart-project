import classes from "./Overlays.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onHideCart} />
);

export default Backdrop;
