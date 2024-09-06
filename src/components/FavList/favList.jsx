import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../favListSlice'; 
import { Link } from 'react-router-dom';
import './favList.css'; 


const FavoritesBar = () => {
  const favorites = useSelector((state) => state.favList.items); 
  const dispatch = useDispatch();

  return (
    <div className="favorites-bar">
      <h2>Your Favorite Drinks:</h2>
      <ul className="favorite-list">
        {favorites.map((drink) => (
          <li key={drink.idDrink} className="favorite-item">
            <div className="favorite-content">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className="favorite-img" />
              <Link to={`/cocktail/${drink.idDrink}`} className="favorite-title">
                {drink.strDrink}
              </Link>
              <button className="remove-button" onClick={() => dispatch(removeFavorite(drink))}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesBar;