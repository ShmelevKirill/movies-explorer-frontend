import "./InfoTooltip.css";
import success from "../../images/success.svg";
import error from "../../images/error.svg";

function InfoTooltip({ isSuccess, onClose, isOpen, message }) {
  function closePopup(e) {
    if (e.target.className === "info-popup") {
      onClose();
    }
  }

  return (
    <>
      {isOpen && (
        <div className="info-popup" onClick={closePopup}>
          <div className="info-popup__container">
            <button
              type="button"
              className="info-popup__close-btn"
              aria-label="Закрыть"
              onClick={onClose}
            ></button>
            <img
              className="info-popup__img"
              src={isSuccess ? success : error}
              alt={isSuccess ? "Успешно" : "Ошибка"}
            />
            <h3 className="info-popup__message">{message}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoTooltip;