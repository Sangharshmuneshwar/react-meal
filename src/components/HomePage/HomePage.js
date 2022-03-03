import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Type a meal name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>

      <div className="home-grid">
        {meals? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
             <div className="meal-info">
             <h3>{meal.strMeal}</h3>
             </div>
            </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
