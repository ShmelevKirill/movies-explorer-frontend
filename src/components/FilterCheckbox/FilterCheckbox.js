import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ text }) {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__default"></input>
      <span className="filter-checkbox__slider"></span>
      <span className="filter-checkbox__label">{text}</span>
    </label>
  );
}