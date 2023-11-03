import React from "react";
import { Link } from 'react-router-dom';


export const recipes = [
  { id: 1, title: 'recipe 1', description: 'description 1' },
  { id: 2, title: 'recipe 2', description: 'description 2' },
  { id: 3, title: 'recipe 3', description: 'description 3' },
];

function RecipeList(){
  return (
    <div>
      <h1>Recipe</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;