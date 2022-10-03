import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import {useFormWithValidation} from "../Validator/Validator";

export default function AuthForm({
  formName,
  title,
  buttonText,
  navText,
  navLinkTo,
  navLinkText,
  onSubmit,
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  const { values, handleChange, errors, isValid } =
    useFormWithValidation();

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsDisabled (true);
    onSubmit(values)
    .then(()=> setIsDisabled (false))
    .catch (()=>setIsDisabled (false));
  }

  return (
    <form
      className="auth-form"
      name={formName}
      noValidate
      onSubmit={handleFormSubmit}
    >
      <h2 className="auth-form__title">{title}</h2>
      {formName !== "loginForm" && (
        <label className="app__button auth-form__input-label">
          Имя
          <input
            type="text"
            className="auth-form__input"
            placeholder="Имя"
            name="name"
            value={values.name}
            onChange={handleChange}
            disabled={isDisabled}
            required
          ></input>
          <span className="auth-form__error-message">{errors.name}</span>
        </label>
      )}
      <label className="app__button auth-form__input-label">
        E-mail
        <input
          type="email"
          className="auth-form__input"
          placeholder="Email"
          name="email"
          pattern="\S+@\S+\.\S+"
          title="Например: test@test.ru"
          value={values.email}
          onChange={handleChange}
          disabled={isDisabled}
          required
        ></input>
        <span className="auth-form__error-message">{errors.email}</span>
      </label>
      <label className="app__button auth-form__input-label">
        Пароль
        <input
          type="password"
          className="auth-form__input"
          placeholder="Пароль"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
        <span className="auth-form__error-message">{errors.password}</span>
      </label>
      <button
        className="auth-form__button app__button"
        type="submit"
        disabled={!isValid || isDisabled}
      >
        {buttonText}
      </button>
      <span className="auth-form__nav-span">
        {navText}
        <Link to={navLinkTo} className="app__button auth-form__nav-span-link">
          {navLinkText}
        </Link>
      </span>
    </form>
  );
}