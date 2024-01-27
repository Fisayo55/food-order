import { useState, useEffect } from "react";
import MealItems from "./MealItems";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        //...
      }
      const data = await response.json();
      console.log(data);

      setLoadedMeals(data);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
