import React from "react";
import css from "./CardMeta.module.css";

interface Props {
  rating: number;
  location: string;
  reviews: number;
}

export default function CardMeta({ rating, location, reviews }: Props) {
  return (
    <div className={css.meta}>
      <span className={css.rating}>
        <svg className={css.iconStar} width="15" height="14">
          <use href="/icons/categories-sprite.svg#icon-star-yellow" />
        </svg>
        <span className={css.ratingText}>
          {rating}({reviews} Reviews)
        </span>
      </span>
      <span className={css.location}>
        <svg className={css.iconMap} width="16" height="16">
          <use href="/icons/categories-sprite.svg#icon-map-dark" />
        </svg>
        {location}
      </span>
    </div>
  );
}
