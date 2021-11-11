import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "ea378905";
  const APP_KEY = "78d3c0ecbfdf7ddd4abeceed7e935b44";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("random");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search);
    setSearch('')
  };

  return (
    <div className="App">
      <h1 className='title'>RecipeFinder</h1>
      <form onSubmit={getSearch} className="search-form">
          <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
          placeholder="Find a Recipe"
          />
          <button className="search-button" type="submit">
            Search
          </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        directions={recipe.recipe.url}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
