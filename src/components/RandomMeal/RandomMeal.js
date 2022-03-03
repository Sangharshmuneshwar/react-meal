import React, { useEffect, useContext } from "react";
import { myContext } from "../context/context";
import "./RandomMeal.scss";
const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);
  const Ingredients = [];
  const ing = (randomMeal)=> {
   
    for(let i = 0; i <=20; i++) {
      if([`meal[strIngredient${i}`]){
        Ingredients.push(`
        ${randomMeal[`strIngredients${i}`]}
        
        
        `);
      }else {
        break;
      }
    }
  }

  useEffect(() => {
    fetchRandomMeal();
    ing(randomMeal);
  }, [fetchRandomMeal]);
  return (
    <div className="random">
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="random-grid">
          <div className="random-grid-controls">
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}> Generate Another Meal</button>
          </div>
          <div className="area">
            <h2>{meal.strArea}</h2>
            <h2>{meal.strCategory}</h2>
          </div>

          <div className="random-grid-instructions">
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
          <h2 className="Ingredients">Ingredients</h2>
           <ul>
            <li>{meal.strIngredient1} - {meal.strMeasure1}</li>
            <li>{meal.strIngredient2} - {meal.strMeasure2}</li>
            <li>{meal.strIngredient3} - {meal.strMeasure3}</li>
            <li>{meal.strIngredient4} - {meal.strMeasure4}</li>
            <li>{meal.strIngredient5} - {meal.strMeasure5}</li>
            <li>{meal.strIngredient6} - {meal.strMeasure6}</li>
            <li>{meal.strIngredient7} - {meal.strMeasure7}</li>
            <li>{meal.strIngredient8} - {meal.strMeasure8}</li>
            <li>{meal.strIngredient9} - {meal.strMeasure9}</li>
            <li>{meal.strIngredient10} - {meal.strMeasure10}</li>
            

           </ul>
        </div>
      ))}
           {/* <ul>
             {Ingredients.map(ingre =>(
               <li>{ingre}</li>
             ))}
           </ul> */}
    </div>
  );
};

export default RandomMeal;
