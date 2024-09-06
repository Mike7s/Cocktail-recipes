import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import ModalFavBar from "./modalFavBar";



function App() {
  const [data, setData] = useState({});
  const [cocktail, setCocktail] = useState("");

  async function searchCocktail(e) {
    e.preventDefault();
    if (cocktail === "") {
      alert("Inserisci un valore");
      return;
    }

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    console.log(response);
    console.log(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
    const data = await response.json();
    console.log(data);
    if (!data.drinks) {
      alert("Drink not found");
    } else {
      setData(data);
    }
  }

  return (
    <>
    
        <ModalFavBar/>
    <h1>Search Cocktail</h1>
      <form onSubmit={searchCocktail}>
        <input
          className="Input"
          type="text"
          name="search"
          placeholder="Search a drink"
          onChange={(e) => {
            setCocktail(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <div className="cards-container">
        {data &&
          data.drinks &&
          data.drinks.map((drink) => {
            return (
              <Card
                key={drink.strDrink}
                img={drink.strDrinkThumb}
                title={drink.strDrink}
                drink={drink}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
