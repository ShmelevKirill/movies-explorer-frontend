import AuthForm from "../AuthForm/AuthForm";
import { useEffect } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Login({ onSubmit, isError, errorMessage }) {
  const { values, errors, isValid, resetForm, handleChange } =
    useFormAndValidation();

  useEffect(() => {
    resetForm(
      {
        email: "",
        password: "",
      },
      {},
      false
    );
  }, [resetForm]);

  function handleSubmit() {
    onSubmit(values);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      buttonClass="auth__btn_name_login"
      link="/signup"
      linkText="Регистрация"
      textWithLink="Ещё не зарегистрированы?"
      data={values}
      isValid={isValid}
      isError={isError}
      errorMessage={errorMessage}
    >
      <div className="auth__field">
        <span className="auth__input-text">E-mail</span>
        <input
          name="email"
          className="auth__input"
          type="text"
          onChange={handleChange}
          value={values.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <span className="auth__input-error">{errors.email || ""}</span>
      </div>

      <div className="auth__field">
        <span className="auth__input-text">Пароль</span>
        <input
          name="password"
          className="auth__input"
          type="password"
          onChange={handleChange}
          value={values.password}
          required
        />
        <span className="auth__input-error">{errors.password || ""}</span>
      </div>
    </AuthForm>
  );
}

export default Login;