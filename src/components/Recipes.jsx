import React from "react";
import Card from './Card'
import recipes from './recipes'

const Recipes = () => {
    return (
        <div className="Recipes">
            {recipes.map((recipe, index) => (
                <Card key={index} image={recipe.image} name={recipe.name} time={recipe.time} url={recipe.url} />
            ))}
        </div> 
    ) 
}

export default Recipes;
