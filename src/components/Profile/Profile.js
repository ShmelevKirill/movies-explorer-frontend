import React, { useState } from "react";
import "./Profile.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [inEditMode, setInEditMode] = useState(false);
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEditClick() {
    setInEditMode(true);
  }
  function handleProfileSubmit (e) {
    e.preventDefault();
    console.log ("Submit");
    if (!email || !name) {
      setError ("Имя и email должны быть заполнены");
      return;
    }
    setError ("");
  }
  return (
    <form className="profile-form" name="profile-form" novalidate
    onSubmit={handleProfileSubmit}>
      <h2 className="profile-form__greeting">Привет, Виталий!</h2>
      <label className="app__button profile-form__input-label">
        Имя
        <input
          className="profile-form__input"
          type="text"
          placeholder="Имя"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          disabled = {!inEditMode}
        ></input>
      </label>
      <label className="app__button profile-form__input-label">
        E-mail
        <input
          type="email"
          className="profile-form__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          disabled = {!inEditMode}
        ></input>
      </label>
      <ErrorMessage text={error} />
      {inEditMode ? (
        <button
          className="profile-form__save-button app__button"
          type="submit"
          disabled={error!==""}
        >
          Сохранить
        </button>
      ) : (
        <>
          <button
            className="profile-form__edit-button app__button"
            type="button"
            onClick={handleEditClick}
          >
            Редактировать
          </button>
          <button
            className="profile-form__exit-button app__button"
            type="button"
          >
            Выйти из аккаунта
          </button>
        </>
      )}
    </form>
  );
}