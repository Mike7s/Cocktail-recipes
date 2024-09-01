import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navBar/navBar";

function Cocktailprova() {
  const [cocktailData, setCocktailData] = useState("");
  const { cocktailId } = useParams();

  async function fetchCocktailDetails() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    );
    const data = await response.json();
    setCocktailData(data.drinks[0]);
    console.log(data);
  }

  useEffect(() => {
    fetchCocktailDetails();
  }, );

  const measures = [];

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktailData[`strIngredient${i}`];
    const measure = cocktailData[`strMeasure${i}`];
    if(measure){
        measures.push(measure)
    }
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      break; 
    }
}

  return (
    <>
      <NavBar />
      <div className="dettails-container">
        <div className="Cocktail-img">
          <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
        </div>
        <div className="instructions-container">
      <h1>{cocktailData.strDrink}</h1>
          <h2>Instruction:</h2>
          <p>{cocktailData.strInstructions}</p>
          <div className="ingredients-container">
            <h2>ingredients :</h2>
            <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient} {measures[index]? `: ${measures[index]}` : ''}</li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cocktailprova;
