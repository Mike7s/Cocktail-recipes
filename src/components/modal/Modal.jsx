import { useEffect, useState } from "react";
import "./modal.css";
import NavBar from "../navBar/NavBar";


function Modal({ title, drink }) {
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState("en");
  const [instruction,setInstruction] = useState(drink.strInstructions)

  const getInstructions = () => {
    switch (language) {
      case "it":
        setInstruction(drink.strInstructionsIT || "Translate not avaible");
        break
      case "fr":
        setInstruction(drink.strInstructionsFR || "Translate not avaible");
        break
      case "de":
        setInstruction(drink.strInstructionsDE || "Translate not avaible");
        break
      default:
        setInstruction(drink.strInstructions);
    }
  };

  useEffect(()=>{
    getInstructions();
  },[language]) 
  

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
   
      <button onClick={toggleModal} className="btn-modal">
        Show ingredients
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <img src={drink.strDrinkThumb} alt={title} />
            <p>{instruction}</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <p>Select language :</p>
            <div className="select-language">
              <button onClick={() => setLanguage("en")}>En</button>
              <button onClick={() => setLanguage("it")}>It</button>
              <button onClick={() => setLanguage("fr")}>Fr</button>
              <button onClick={() => setLanguage("de")}>De</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
