import classes from "./Checkout.module.css";
import Input from "../../UI/Input/Input";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostal = postalInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameInputClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetInputClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalInputClasses = `${classes.control} ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;

  const cityInputClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <Input
        clearClass={true}
        className={nameInputClasses}
        label="Your Name"
        ref={nameInput}
        condition={!formInputsValidity.name}
        errorMessage="Please enter a valid name"
        input={{
          type: "text",
          id: "name",
        }}
      />
      <Input
        clearClass={true}
        className={streetInputClasses}
        label="Street"
        ref={streetInput}
        condition={!formInputsValidity.street}
        errorMessage="Please enter a valid street"
        input={{
          type: "text",
          id: "street",
        }}
      />
      <Input
        clearClass={true}
        className={postalInputClasses}
        label="Postal Code"
        condition={!formInputsValidity.postal}
        errorMessage="Please enter a valid postal code"
        ref={postalInput}
        input={{
          type: "text",
          id: "postal-code",
        }}
      />
      <Input
        clearClass={true}
        className={cityInputClasses}
        label="City"
        ref={cityInput}
        condition={!formInputsValidity.city}
        errorMessage="Please enter a valid city"
        input={{
          type: "text",
          id: "city",
        }}
      />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCansel}>
          Cansel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
