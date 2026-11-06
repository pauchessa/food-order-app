import MealCard from "../components/MealCard.jsx";
import { useState, useEffect } from "react";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error();
        }
        const meals = await response.json();
        setMeals(meals);
      } catch (error) {
        setError(true);
      }
    }
    fetchMeals();
  }, []);

  return (
    <div id="meals">
      {error ? (
        <p className="center">Unable to load meals. Please try again later.</p>
      ) : (
        meals.map((meal) => {
          return <MealCard key={meal.id} meal={meal} />;
        })
      )}
    </div>
  );
}
