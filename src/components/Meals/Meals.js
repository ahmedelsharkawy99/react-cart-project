import { Fragment } from "react";
import AvaliableMeals from "./AvalibleMeals/AvaliableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
}

export default Meals;
