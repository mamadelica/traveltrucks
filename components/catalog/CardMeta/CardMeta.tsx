import React from "react";
import css from "./CardMeta.module.css";

export default function CardMeta() {
  return (
    <div className={css.meta}>
      <span className={css.rating}>
        <svg className={css.iconStar} width="15" height="14">
          <use href="/icons/categories-sprite.svg#icon-star-yellow" />
        </svg>
        4.4(2 Reviews)
      </span>
      <span className={css.location}>
        <svg className={css.iconMap} width="16" height="16">
          <use href="/icons/categories-sprite.svg#icon-map-dark" />
        </svg>
        Kyiv, Ukraine
      </span>
    </div>
  );
}
