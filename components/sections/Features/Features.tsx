import css from "./Features.module.css";

export default function Features() {
  return (
    <div className={css.featuresWrapper}>
      <div className={css.equipmentWrapper}>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/categories-sprite.svg#icon-automatic" />
            </svg>
            <span>text</span>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/categories-sprite.svg#icon-automatic" />
            </svg>
            <span>text</span>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/categories-sprite.svg#icon-automatic" />
            </svg>
            <span>text</span>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/categories-sprite.svg#icon-automatic" />
            </svg>
            <span>text</span>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/categories-sprite.svg#icon-automatic" />
            </svg>
            <span>text</span>
          </li>
        </ul>
      </div>
      <div className={css.detailsWrapper}>
        <table className={css.vehicleTable}>
          <caption className={css.detailsTitle}>Vehicle details</caption>

          <tbody className={css.vehicleTable}>
            <tr className={css.separatorRow}>
              <td colSpan={2} className={css.separatorCell}></td>
            </tr>

            <tr>
              <th className={css.cellHeader} scope="row">
                Form
              </th>
              <td className={css.cellData}>Panel truck</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Length
              </th>
              <td className={css.cellData}>5.4 m</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Width
              </th>
              <td className={css.cellData}>2.01 m</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Height
              </th>
              <td className={css.cellData}>2.05 m</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Tank
              </th>
              <td className={css.cellData}>132 l</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Consumption
              </th>
              <td className={css.cellData}>12.4 l/100km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
