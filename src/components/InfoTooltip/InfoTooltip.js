import React from "react";
import "./InfoTooltip.css";

export default function InfoTooltip({ isOpen, text, onClose }) {
  return (
    <div className={`popup popup_type_info ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup_container_type_info">
        <button
          onClick={onClose}
          className="popup__close-btn app_button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <p className="popup__info">{text}</p>
      </div>
    </div>
  );
}