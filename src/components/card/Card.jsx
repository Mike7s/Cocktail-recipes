import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../favListSlice'; 
import { useNavigate } from 'react-router-dom';

function Card({ img, title, drink }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favList.items); 
  const isFavorite = favorites.some((item) => item.idDrink === drink.idDrink); 

  const handleCardClick = () => {
    navigate(`/cocktail/${drink.idDrink}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    if (isFavorite) {
      dispatch(removeFavorite(drink));
    } else {
      dispatch(addFavorite(drink));
    }
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? '❤️' : '🤍'} 
      </button>
    </div>
  );
}

export default Card;