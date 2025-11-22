"use client";

import CardMeta from "../CardMeta/CardMeta";
import css from "./CampersGrid.module.css";
import { useState } from "react";

export default function CampersGrid() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={css.campersListWrapper}>
      <ul className={css.campersList}>
        <li className={css.campersItem}>
          <div className={css.camperImgWrapper}></div>

          <div className={css.camperInfo}>
            <div className={css.cardHeader}>
              <div className={css.cardHeaderWrapper}>
                <h3 className={css.cardHeaderTitle}>Mavericks</h3>

                <div className={css.priceWrapper}>
                  <p className={css.camperPrise}>€8000.00</p>
                  {/* Btn Favorite */}
                  <button
                    type="button"
                    className={css.btnFavorite}
                    onClick={() => setIsActive(!isActive)}
                    aria-pressed={isActive}
                    aria-label="Toggle favorite"
                  >
                    <svg className={css.iconHeart} width="24" height="24">
                      <use
                        href={
                          isActive
                            ? "/icons/categories-sprite.svg#icon-heart-red"
                            : "/icons/categories-sprite.svg#icon-heart-dark"
                        }
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <CardMeta />
            </div>
            <p className={css.camperDescr}>
              Embrace simplicity and freedom with the Mavericks panel truck...
            </p>
            <div>
              <ul className={css.featuresList}>
                <li className={css.featuresItem}>text</li>
              </ul>
            </div>
            <button className={css.showmoreBtn}>Show more</button>
          </div>
        </li>
      </ul>

      <button className={css.loadmoreBtn}>Load more</button>
    </div>
  );
}
