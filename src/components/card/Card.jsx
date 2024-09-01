import { useNavigate } from "react-router-dom";

function Card({ img, title, drink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cocktail/${drink.idDrink}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;

