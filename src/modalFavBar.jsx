import { useState } from "react";
import FavoritesBar from "./components/FavList/favList";

function ModalFavBar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button className="favList-Button" onClick={toggleModal}>WishList</button>
      {modal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>X</button>
            <FavoritesBar />
          </div>
        </div>
      )}
    </>
  );
}

export default ModalFavBar;
