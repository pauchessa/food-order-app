import MealCard from "../components/MealCard.jsx";
import { useState, useEffect } from "react";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();

      setMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <div id="meals">
      {meals.map((meal) => {
        return <MealCard key={meal.id} meal={meal} />;
      })}
    </div>
  );
}
