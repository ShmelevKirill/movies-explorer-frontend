import "./Profile.css";
import { useEffect } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Profile({
  handleLogout,
  onSubmit,
  isError,
  errorMessage,
  user,
  handleEdit,
  isEdit,
  setIsEdit,
}) {
  const { values, errors, isValid, resetForm, handleChange, setIsValid } =
    useFormAndValidation();

  useEffect(() => {
    setIsEdit(false);
  }, []);

  useEffect(() => {
    if (values.name === user.name) {
      setIsValid(false);
    }
  }, [values.name]);

  useEffect(() => {
    if (values.email === user.email) {
      setIsValid(false);
    }
  }, [values.email]);

  useEffect(() => {
    resetForm(
      {
        name: user.name,
        email: user.email,
      },
      {},
      false
    );
  }, [resetForm]);

  function editTrue() {
    handleEdit();
    values.name = user.name;
    values.email = user.email;
    setIsValid(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setIsValid(false);
  }

  return (
    <section className="profile">
      <div className="profile__container content__container">
        <h1 className="profile__title">Привет, {user.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <ul className="profile__list">
            <li className="profile__item">
              <span className="profile__text">Имя</span>
              {isEdit ? (
                <>
                  <input
                    className="profile__input profile__input_name_name"
                    value={values.name}
                    name="name"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    onChange={handleChange}
                    pattern="^[А-ЯЁа-яёA-Za-z\s-]+$"
                    required
                  />
                  <span className="profile__input-error">
                    {errors.name || ""}
                  </span>
                </>
              ) : (
                <input
                  className="profile__input profile__input_name_name"
                  value={user.name}
                  readOnly
                  disabled
                />
              )}
            </li>
            <li className="profile__item">
              <span className="profile__text">E-mail</span>
              {isEdit ? (
                <>
                  <input
                    className="profile__input profile__input_name_email"
                    value={values.email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <span className="profile__input-error">
                    {errors.email || ""}
                  </span>
                </>
              ) : (
                <input
                  className="profile__input profile__input_name_email"
                  value={user.email}
                  readOnly
                  disabled
                />
              )}
            </li>
          </ul>
          <div className="profile__buttons">
            {isEdit ? (
              <>
                {isError && (
                  <span className="profile__error">{errorMessage}</span>
                )}
                <button
                  type="submit"
                  className={`profile__btn profile__btn_name_save ${
                    !isValid ? "profile__btn_disabled" : ""
                  }`}
                  aria-label="Сохранить"
                  disabled={!isValid}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="profile__btn profile__btn_name_edit"
                  onClick={editTrue}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__btn profile__btn_name_logout"
                  onClick={handleLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;