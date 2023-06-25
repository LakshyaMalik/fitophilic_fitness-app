import React, { useState } from 'react';
import './diet.css';
import {breakfastRecipes , lunchRecipes , dinnerRecipes} from './recipe';

const Diet = () => {
  const [meal, setMeal] = useState('breakfast');
  const [recipes, setRecipes] = useState([]);

  const handleMealChange = (newMeal) => {
    setMeal(newMeal);
    switch (newMeal) {
      case 'breakfast':
        setRecipes(breakfastRecipes);
        break;
      case 'lunch':
        setRecipes(lunchRecipes);
        break;
      case 'dinner':
        setRecipes(dinnerRecipes);
        break;
      default:
        setRecipes([]);
        break;
    }
  };
  return (
    <div class="diet">
      <div className='btn-bar'>
        <button className='sbtn' onClick={() => handleMealChange('breakfast')}>Breakfast</button>
        <button className='sbtn' onClick={() => handleMealChange('lunch')}>Lunch</button>
        <button className='sbtn' onClick={() => handleMealChange('dinner')}>Dinner</button>
      </div>
  
        <div className="msg">tap on image to see recipe!</div>
        <div className="recipe-list">
          {recipes.length > 0 ? (
    recipes.map((recipe) => (
      <div className="recipe" key={recipe.id}>
        <a href={recipe.procedure}>
          <img src={recipe.image} alt={recipe.name} />
        </a>
        <h3>{recipe.name}</h3>
        <p>Quantity: {recipe.quantity}</p>
        <p>Calories: {recipe.Cal}</p>
      </div>
    ))
  ) : (
    <div className="greet">
      Eating healthy is not a punishment. It's a form of self-respect and a way
      of nurturing your body to help it thrive!
    </div>
        )}
      </div>
    </div>
  );
}
export default Diet;
