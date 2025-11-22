'use client';

import CardMeta from "../CardMeta/CardMeta";
import css from "./CamperCard.module.css";


export default function CamperCard() {
  return <div className={css.cardWrapper}>
    <h3 className={css.cardHeaderTitle}>Mavericks</h3>
    <CardMeta/>
    <p className={css.camperPrise}>€8000.00</p>
    <ul className={css.cardGallery}>
      <li className={css.cardPhoto}></li>
      <li className={css.cardPhoto}></li>
      <li className={css.cardPhoto}></li>
      <li className={css.cardPhoto}></li>
    </ul>
    <p className={css.cardDescription}>text</p>
  </div>;
}
