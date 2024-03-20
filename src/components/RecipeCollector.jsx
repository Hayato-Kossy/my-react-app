import React, { useState } from 'react';

export const RecipeCollector = () => { 

    const [recipeName, setRecipeName] = useState("");
    const [recipeDetails, setRecipeDetails] = useState("");
    const [recipes, setRecipes] = useState([]);

    const addRecipe = () => {
        const recipe = {
            name: recipeName,
            details: recipeDetails
        }
        setRecipes([...recipes, recipe]);
        setRecipeDetails("");
        setRecipeName("");
    }

    return (
        <div>
            <h2>レシピ共有アプリ</h2>
            <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="レシピ名" />
            <input type="text" value={recipeDetails} onChange={(e) => setRecipeDetails(e.target.value)} placeholder="詳細" />
            <button onClick={addRecipe}>レシピを追加</button>
            <ul>
                {recipes.map((recipe, index) => (
                 <li key={index}>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.details}</p>
                 </li>
                ))}
            </ul>
        </div>
    )
}
