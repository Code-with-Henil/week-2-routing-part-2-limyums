import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from "./Recipe";
import RecipeList from './Recipe';


function RecipeDetatil() {

    const { id } = useParams();
    const recipe = recipes.find((r) => r.id.toString() === id);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
        <RecipeList />
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
        </>
    );

};

export default RecipeDetatil;