import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = "ea378905";
  const APP_KEY = "78d3c0ecbfdf7ddd4abeceed7e935b44";

  const exampleRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">
            Search
          </button>
      </form>
    </div>
  );
}

export default App;
