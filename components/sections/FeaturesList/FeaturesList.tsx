
import { Camper } from "@/lib/api/api";

import css from "./FeaturesList.module.css"

const featureIcons: Record<string, string> = {
  AC: "/icons/categories-sprite.svg#icon-ac",
  Bathroom: "/icons/categories-sprite.svg#icon-bathroom",
  Kitchen: "/icons/categories-sprite.svg#icon-kitchen",
  TV: "/icons/categories-sprite.svg#icon-tv",
  Radio: "/icons/categories-sprite.svg#icon-radio",
  Refrigerator: "/icons/categories-sprite.svg#icon-refrigerator",
  Microwave: "/icons/categories-sprite.svg#icon-microwave",
  Gas: "/icons/categories-sprite.svg#icon-gas",
  Water: "/icons/categories-sprite.svg#icon-water",
};

interface Props {
  camper: Camper;
}


export default function FeaturesList({ camper }: Props) {
  return (
    
      <ul className={css.featuresList}>
  {[
    camper.AC && "AC",
    camper.bathroom && "Bathroom",
    camper.kitchen && "Kitchen",
    camper.TV && "TV",
    camper.radio && "Radio",
    camper.refrigerator && "Refrigerator",
    camper.microwave && "Microwave",
    camper.gas && "Gas",
    camper.water && "Water",
  ]
    .filter(Boolean)
    .map((feature, idx) => (
      <li key={idx} className={css.featuresItem}>
        <svg className={css.featureIcon} width="20" height="20">
          <use href={feature === false ? "" : featureIcons[feature]} />
        </svg>
        <span>{feature}</span>
      </li>
    ))}
</ul>
    
  )
}
