"use client";

import { useState } from "react";
import css from "./FiltersPanel.module.css";

const equipmentFilters = [
  { id: "ac", label: "AC" },
  { id: "automatic", label: "Automatic" },
  { id: "kitchen", label: "Kitchen" },
  { id: "tv", label: "TV" },
  { id: "bathroom", label: "Bathroom" },
];

const vehicleTypes = [
  { id: "van", label: "Van" },
  { id: "fully-integrated", label: "Fully Integrated" },
  { id: "alcove", label: "Alcove" },
];

export default function FiltersPanel() {
  const [text, setText] = useState("")
  return (
    <form className={css.form} aria-label="Vehicle search filters">
      {/* Location */}
      <fieldset className={css.group}>
        <legend className={css.locationLegend}>Location</legend>

        <div className={css.inputWrapper}>

          <svg className={css.iconMap} aria-hidden="true" viewBox="0 0 20 20">
  <use href={!text ? "/icons/categories-sprite.svg#icon-map-light" : "/icons/categories-sprite.svg#icon-map-dark"} />
</svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={css.input}
            value={text}  
            onChange={(event => setText(event.target.value))}
          />
        </div>
      </fieldset>

      <h2 className={css.title}>Filters</h2>

      {/* Equipment */}
      <fieldset className={css.group}>
        <legend className={css.legend}>Vehicle equipment</legend>

        <svg className={css.separator}>
          <use href="/icons/separator.svg#icon-separator" />
        </svg>

        <div className={css.checkboxList}>
          {equipmentFilters.map(({ id, label }) => (
            <label key={id} className={css.checkboxItem}>
              <input
                type="checkbox"
                name="equipment"
                value={id}
                className={css.checkbox}
              />
              <div className={css.square}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon} aria-hidden="true">
                    <use href={`/icons/categories-sprite.svg#icon-${id}`} />
                  </svg>
                </div>
                <span className={css.labelText}>{label}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Type */}
      <fieldset className={css.group}>
        <legend className={css.legend}>Vehicle type</legend>

        <svg className={css.separator}>
          <use href="/icons/separator.svg#icon-separator" />
        </svg>

        <div className={css.radioList}>
          {vehicleTypes.map(({ id, label }) => (
            <label key={id} className={css.radioItem}>
              <input
                type="radio"
                name="type"
                value={id}
                className={css.radio}
              />
              <div className={css.square}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon} aria-hidden="true">
                    <use href={`/icons/vehicle-type-sprite.svg#icon-${id}`} />
                  </svg>
                </div>
                <span className={css.labelText}>{label}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
}
