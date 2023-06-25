import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import Loader from "../../UI/Loader/Loader";
import MealItem from "../MealItem/MealItem";
import classes from "./AvaliableMeals.module.css";
import useHttp from "../../../hooks/use-http";

function AvaliableMeals() {
  const [meals, setMeals] = useState([]);
  const {
    sendRequest: fetchAvaliableMeals,
    data,
    isLoading,
    error,
  } = useHttp();

  useEffect(() => {
    const fetchMeals = async () => {
      await fetchAvaliableMeals(
        "https://react-http-635fa-default-rtdb.firebaseio.com/meals.json"
      );

      let loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <section className={classes["meals-error"]}>
        <p>{error}</p>
      </section>
    );

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvaliableMeals;
