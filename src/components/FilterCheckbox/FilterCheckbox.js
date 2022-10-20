import "./FilterCheckbox.css";

export default function FilterCheckbox({ handleShortFilms, isShortFilm }) {
  return (
    <label className="filter-checkbox">
      <input 
        type="checkbox" 
        className="filter-checkbox__default"
        id="checkbox"
        checked={isShortFilm}
        onChange={handleShortFilms}
        ></input>
      <span className="filter-checkbox__slider"></span>
      <label htmlFor="checkbox" className="filter-checkbox__label">Короткометражки</label>
    </label>
  );
}