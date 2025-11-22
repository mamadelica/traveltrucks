import { Camper } from "@/lib/api/api";
import css from "./Features.module.css";

interface Props {
  camper: Camper
}

export default function Features({camper}: Props) {
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
              <td className={css.cellData}>{camper.form}</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Length
              </th>
              <td className={css.cellData}>{camper.length}</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Width
              </th>
              <td className={css.cellData}>{camper.width}</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Height
              </th>
              <td className={css.cellData}>{camper.height}</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Tank
              </th>
              <td className={css.cellData}>{camper.tank}</td>
            </tr>
            <tr>
              <th className={css.cellHeader} scope="row">
                Consumption
              </th>
              <td className={css.cellData}>{camper.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
