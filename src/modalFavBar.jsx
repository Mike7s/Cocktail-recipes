import { useState } from "react";
import FavoritesBar from "./components/favListtest/favList";
import { CiBookmark } from "react-icons/ci";


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
      <button className="favList-Button" onClick={toggleModal}><CiBookmark />
      </button>
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
