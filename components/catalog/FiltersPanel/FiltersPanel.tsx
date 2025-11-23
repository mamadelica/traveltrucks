"use client";

import { EquipmentId, VehicleTypeId } from "@/lib/types/filtersTypes";
import css from "./FiltersPanel.module.css";
import { useFiltersStore } from "@/lib/Store/FiltersStore";
import { loadCampers } from "@/lib/api/api";
import { useCampersStore } from "@/lib/Store/campersStore";
import { usePaginationStore } from "@/lib/Store/paginationStore";

const equipmentFilters: { id: EquipmentId; label: string }[] = [
  { id: "AC", label: "AC" },
  { id: "automatic", label: "Automatic" },
  { id: "kitchen", label: "Kitchen" },
  { id: "TV", label: "TV" },
  { id: "bathroom", label: "Bathroom" },
];

const vehicleTypes: { id: VehicleTypeId; label: string }[] = [
  { id: "panelTruck", label: "Van" },
  { id: "fullyIntegrated", label: "Fully Integrated" },
  { id: "alcove", label: "Alcove" },
];

export default function FiltersPanel() {
  const {
    location,
    setLocation,
    equipment,
    toggleEquipment,
    type,
    setType,
    transmission,
    setTransmission,
    clearFilters,
  } = useFiltersStore();
  const { search } = usePaginationStore();
  const { clearCampers } = useCampersStore();

  const handleSubmit = async () => {
    clearCampers();

    await loadCampers({ page: 1, limit: 4 });
    search();
    clearFilters();
  };

  return (
    <form
      action={handleSubmit}
      className={css.form}
      aria-label="Vehicle search filters"
    >
      {/* Location */}
      <fieldset className={css.group}>
        <legend className={css.locationLegend}>Location</legend>
        <div className={css.inputWrapper}>
          <svg className={css.iconMap} aria-hidden="true" viewBox="0 0 20 20">
            <use
              href={
                !location
                  ? "/icons/categories-sprite.svg#icon-map-light"
                  : "/icons/categories-sprite.svg#icon-map-dark"
              }
            />
          </svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={css.input}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
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
                checked={
                  id === "automatic"
                    ? transmission === "automatic"
                    : equipment.includes(id)
                }
                onChange={() => {
                  if (id === "automatic") {
                    setTransmission(
                      transmission === "automatic" ? "manual" : "automatic"
                    );
                  } else {
                    toggleEquipment(id);
                  }
                }}
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
                checked={type === id}
                onChange={() => setType(id)}
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
