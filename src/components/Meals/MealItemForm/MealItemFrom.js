import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
const MealItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +inputRef.current.value;
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
