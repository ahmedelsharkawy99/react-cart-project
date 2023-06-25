import classes from "./Overlays.module.css";

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

export default ModalOverlay;
