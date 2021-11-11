import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, directions, ingredients}) => {

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.recipe} src={image} alt="" />  
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
             <a href={directions} target="_blank" rel="noreferrer">Recipe</a>
        </div>
    );
}

export default Recipe;