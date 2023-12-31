import classes from "./Card.module.css";
const Card = (props) => (
  <div className={`${classes.card} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export default Card;
